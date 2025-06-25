import express from "express"
import bodyParser from "body-parser"



const app = express();
const port  = 4000;
// const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT"
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




const products = [
    {
      id: 1,
      name: "White Classic T-Shirt",
      price: "$25",
      type: "Tops",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/2130283/1.jpg?8886", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Four in one T-shirt",
      price: "$50",
      type: "Tops",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlZSUyMHNoaXJ0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Silver Wrist Watch",
      price: "$40",
      type: "Accessories",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/3385352/1.jpg?4789",
    },
    {
      id: 4,
      name: "leather Wrist Watch",
      price: "$60",
      type: "Wrist watch",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/1476593/1.jpg?9428",
    },
    {
      id: 5,
      name: "Peach Baggy Pants",
      price: "$80",
      type: "Pants",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/4852004/1.jpg?2201",
    },
    {
      id: 6,
      name: "Denim Jacket",
      price: "$70",
      type: "Outerwear",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/594167/1.jpg?4582",
    },
    {
      id: 7,
      name: "Summer Dress",
      price: "$55",
      type: "Dresses",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/6343152/1.jpg?8585",
    },
    {
      id: 8,
      name: "High Heels",
      price: "$65",
      type: "Footwear",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/1274852/1.jpg?6242",
    },
    
  ];


  const newArrival = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: "$25",
      type: "Tops",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/9421012/1.jpg?2510", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Warm Hoodie",
      price: "$50",
      type: "Outerwear",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/6634263/1.jpg?2531",
    },
    {
      id: 3,
      name: "Slim Fit Jeans",
      price: "$40",
      type: "Bottoms",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/8621513/1.jpg?0037",
    },
    {
      id: 4,
      name: "Casual Sneakers",
      price: "$60",
      type: "Sneakers",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/9531653/1.jpg?8923",
    },
    {
      id: 5,
      name: "Leather Handbag",
      price: "$80",
      type: "Handbags",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/3506952/1.jpg?3716",
    },
    {
      id: 6,
      name: "Denim Jacket",
      price: "$70",
      type: "Outerwear",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/2739111/1.jpg?1210",
    },
    {
      id: 7,
      name: "Summer Dress",
      price: "$55",
      type: "Dresses",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/43/9974703/1.jpg?7816",
    },
    {
      id: 8,
      name: "High Heels",
      price: "$65",
      type: "Footwear",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/8539062/1.jpg?9299",
    },
    {
      id: 9,
      name: "Cargo Pants",
      price: "$45",
      type: "Bottoms",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/0086003/1.jpg?53388",
    },
    {
      id: 10,
      name: "Formal Blazer",
      price: "$90",
      type: "Outerwear",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/0363682/1.jpg?8254",
    },
    {
      id: 11,
      name: "Backpack",
      price: "$35",
      type: "Handbags",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/8076104/1.jpg?9525",
    },
    {
      id: 12,
      name: "Sports Sneakers",
      price: "$75",
      type: "Sneakers",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/3623743/1.jpg?5568",
    },
    {
      id: 13,
      name: "Sports Sneakers",
      price: "$75",
      type: "Sneakers",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/150966/1.jpg?4096",
    },
    {
      id: 14,
      name: "Sports Sneakers",
      price: "$75",
      type: "Sneakers",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/4274413/1.jpg?5281",
    },
    {
      id: 15,
      name: "Sports Sneakers",
      price: "$75",
      type: "Sneakers",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/3408363/1.jpg?2785",
    },
  ];



app.get("/featuredItem",(req,res)=>{

res.status(200).json(products) 

})





app.post("/featuredItem",(req,res)=>{
  
const newProduct = {
    id: products.length +1,
    name:req.body.name,
    price:req.body.price,
    type:req.body.type,
    image:req.body.image,

}
 
products.push(newProduct);
res.json(newProduct);

})


app.get("/newArrival",(req,res)=>{

res.status(200).json(newArrival) 

})


app.post("/newArrival",(req,res)=>{
  
const newProduct = {
    id: newArrival.length +1,
    name:req.body.name,
    price:req.body.price,
    type:req.body.type,
    image:req.body.image,

}
 
newArrival.push(newProduct);
res.json(newProduct);

})

app.listen(port,()=>{
    console.log(`Successfully started server on port ${port}.`)
})


























 