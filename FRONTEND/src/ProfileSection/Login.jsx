import axios from "axios";
import { useState, useEffect } from "react";
import { IoPerson } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
   const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const playBeep = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = "sine"; // sound type: sine, square, triangle, sawtooth
    oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // 440 Hz = A4
    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1); // play for 0.1 second
  };


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 

  async function handleSubmit(e) {
    e.preventDefault();
const username = email
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status == 201) {
        alert(response.data.message);
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setLoginError(!loginError);
        playBeep();
        alert(error.response.data.message);
        
      } else {
        alert("Network or server error");
      }
      console.log("Error Logging in:", error);
    }
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const showHiddenPasword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {/* OVERAL DIV */}
      <div className="overal-div ">
        {/* DIV CONTAINING OVERAL CONTENT */}
        <div className="overal-content">
          {/* DIV CONTAINING TEXT AND INPUTS */}
          <div className="textInputs">
            {/* DIV FOR TEXT */}
            <div className="logintext-div">
              <h2 className="loginh2">LOGIN</h2>
              <p className="logintextP">Trendy & Affordable</p>
            </div>

            {/* FORM SECTION */}

            <form className="loginform-div" onSubmit={handleSubmit}>
              <div className="userName-Div">
                <IoPerson className="searchIcon" />
                <input
                  id="user"
                  className="loginInputs"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={changeEmail}
                  required
                />
              </div>

              {/* <br/> */}

              <div className="userName-Div">
                {showPassword ? (
                  <FaEye className="searchIcon" onClick={showHiddenPasword} />
                ) : (
                  <FaEyeSlash
                    className="searchIcon"
                    onClick={showHiddenPasword}
                  />
                )}
                <input
                  id="pass"
                  className="loginInputs"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  value={password}
                  style={{ borderColor: loginError ? "red" : "" }}
                  onChange={changePassword}
                  required
                />
              </div>

              {/* <br/> */}
              <div className="userName-Div loginR-div">
                <input
                  id="btn"
                  className="loginInputs"
                  type="submit"
                  value="Login"
                />
                <h2 id="reigsterText">
                  if you dont have an account?{" "}
                  <span className="loginTextSpan">
                    <Link to="/register">Register</Link>
                  </span>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
