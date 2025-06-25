import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: "BENCLOTHING",
    resave: false,
    saveUninitialized: true,
    // cookie:{
    //     maxAge:1000*60*60*24,
    // }
  })
);

app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "clothing-store",
  password: "chibunna",
  port: 5432,
});

db.connect();

app.get("/check-auth", (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.status(200).json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});

app.post("/register", async (req, res) => {
  const username = req.body.username.trim();
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const confirmPassword = req.body.confirmPassword.trim();

  try {
    const checkResult = await db.query(
      "SELECT * FROM customer WHERE email = $1 OR username = $2",
      [username, email]
    );
    if (checkResult.rows.length > 0) {
      return res.json({ message: "Email or Username already exist" });
    } else if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not Match" });
    } else {
      try {
        const hash = await bcrypt.hash(password, saltRounds);
        const result = await db.query(
          "INSERT INTO customer (username,email,password) VALUES($1,$2,$3) RETURNING * ",
          [username, email, hash]
        );
        const userDetail = result.rows[0];
        console.log("Newly Registered User:", userDetail);
        req.login(userDetail, (err) => {
          if (err) {
            console.error("Login error after registration:", err);
          } else {
            return res
              .status(201)
              .json({ message: "you have successfully signed in" });
          }
        });
      } catch (err) {
        console.log("Error Hashing password", err);
        return res.status(500).json({ message: "Internal server Error" });
      }
    }
  } catch (err) {
    return res.status(400).json({
      message: err || "Unable to Sign Please Check your Details Again",
    });
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, userDetail, info) => {
    if (err) {
      return res.status(500).json({ message: err.message || "Internal error" });
    }
    if (!userDetail) {
      return res.status(401).json({ message: "Incorrect Username or password" });
    }

    req.login(userDetail, (err) => {
      if (err) {
        return res.status(500).json({ message: "Login error" });
      } else {
        return res
          .status(201)
          .json({ message: "you have successfully signed in" });
      }
    });
  })(req, res, next);
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ message: err.message || "Logout failed" });
    } else {
      res
        .status(200)
        .json({ authenticate: false, message: "Successfully Logged Out" });
    }
  });
});

passport.use(
  new Strategy(async function verify(username, password, cb) {
  
    try {
      const customerDetails = await db.query(
        "SELECT * FROM customer WHERE email = $1",
        [username]
      );
      const detail = customerDetails.rows;
        
      if (detail.length === 0) {
        return cb(null, false, { message: "User not found" });
        //    res.json({ message: "User not found" });
      }

      const hashedPassword = detail[0].password;
      const userDetail = detail[0];

      const match = await bcrypt.compare(password, hashedPassword);
      if (match) {
        return cb(null, userDetail);
        //    res.status(201)
        //     .json({ message: "you have successfully signed in" })
        //   console.log("Error with comparing Password:", err);
      } else {
        return cb(null, false, { message: "Incorrect Password" });
        //    res.status(401).json({ message: "Incorrect Password" });
      }
    } catch (err) {
      return cb(err);
      // res.status(400).json({ message: "Internal Server Error", err });
    }
  })
);

passport.serializeUser((userDetail, cb) => {
  cb(null, userDetail);
});
passport.deserializeUser((userDetail, cb) => {
  cb(null, userDetail);
});

// FOR THE FEATURED JSX
// app.post("/featured",(req,res)=>{
//     const {name,price,type,image} = req.body
//     featuredData.push({name,price,type,image})
//     res.status(200).json({message:"Item sent to the frontend successfully"})
// })

// app.get("/featured", (req,res)=>{

//     res.status(200).json(featuredData)

// })
const API_URL = "http://localhost:4000";

app.get("/featuredItem", async (req, res) => {
  console.log("Incoming Get /featuredItem");
  try {
    const response = await axios.get(`${API_URL}/featuredItem`);
    res.status(200).json(response.data);
    console.log("after get /featuredItem");
  } catch (err) {
    console.error("Error fetching featured items:", err.message);
    res.status(500).json({ message: "Error fetching items" });
  }
});

app.post("/featuredItem", async (req, res) => {
  console.log("Incoming POST /featuredItem request body:", req.body);
  try {
    await axios.post(`${API_URL}/featuredItem`, req.body);
    res.json({ message: "Successful" });
    console.log("New Product to be added:", req.body); // Another debug log
  } catch (err) {
    console.error("Error sending featured item:", err.message);
    res.status(500).json({ message: "Error sending items" });
  }
});

app.get("/newArrival", async (req, res) => {
  console.log("Incoming get /newArrival"); // Debug log
  try {
    const response = await axios.get(`${API_URL}/newArrival`);

    res.status(200).json(response.data);
    console.log("Incoming GET /newArrival"); // Debug log
  } catch (err) {
    console.error("Error fetching featured items:", err.message);
    res.status(500).json({ message: "Error fetching items" });
  }
});

app.post("/newArrival", async (req, res) => {
  console.log("Incoming POST /newArrival request body:", req.body); // Debug log
  try {
    await axios.post(`${API_URL}/newArrival`, req.body);
    res.json({ message: "Successful" });
    console.log("New Product to be added:", req.body); // Another debug log
  } catch (err) {
    console.error("Error sending featured item:", err.message);
    res.status(500).json({ message: "Error sending items" });
  }
});

app.listen(port, () => {
  console.log(`The Server is Listening on Port ${port} `);
});
