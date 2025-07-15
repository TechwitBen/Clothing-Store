import axios from "axios";
import { useState } from "react";
import "./Register.css"
import { useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import clothBackground from "../images/clothBackground.png"

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not Match");
      return;
    }

    if (password.length == 0) {
      alert("Please Input a password");
      return;
    }
    if (password.length < 5) {
      alert("The Password must be greater than 5 characters");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
        confirmPassword,
      },
  {
    withCredentials: true,
  }
    );

      console.log(username,email, password, confirmPassword);

      if (response.status == 201) {
        navigate("/");
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Error Signing in:", error);
      //   const errorMessage = error.response?.data?.errorMessage
      alert(error || "An Error Occured Please try Again");
    }
  }

  const changeUser = (e) => {
    setUsername(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    const inputValue = e.target.value
    if(inputValue.length > 15){
      alert("password must not be greater than 9 characters")
    }else{
      setPassword(e.target.value);
    }
    
  };
  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const showHiddenPasword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {/* OVERAL DIV */}
      <div className="overal-registerdiv" style={{ backgroundImage: `url(${clothBackground})` }}>
        {/* DIV CONTAINING THE TWO DIVS*/}
        <div className="overal-registercontent1" ></div>
        {/* DIV CONTAINING OVERAL CONTENT */}
        <div className="overal-registercontent2">
          {/* DIV CONTAINING TEXT AND INPUTS */}


          <div className="registerTextInputs">



            {/* DIV FOR TEXT */}
            <div className="registerText-div">
              <h2 className="register-h2">Sign Up </h2>
              <p className="register-p">Registered Memeber?<span className="register-span"><Link to="/login"> Login</Link></span></p>
            </div>

            {/* FORM SECTION */}
            
              <form onSubmit={handleSubmit} className="registerForm">
               
                {/* <br /> */}
                <div  className="registerInput-div">
                   <IoPerson className="registerIcon"/>
                <input
                  id="user" className="registerInputs"
                  type="text"
                  name="username"
                  value={username}
                  onChange={changeUser}
                  placeholder="Username"
                  required
                />
                </div>

                <div  className="registerInput-div">
                   <MdEmail  className="registerIcon" />
                <input
                  id="email" className="registerInputs"
                  type="text"
                  name="username"
                  value={email}
                  onChange={changeEmail}
                  placeholder="Email"
                  required
                />
                </div>

                
                <div className="registerInput-div">
                   <FaLock  className="registerIcon"/>
                <input
                  id="pass" className="registerInputs"
                  type={showPassword?"text":"password"}
                  name="password"
                  value={password}
                  onChange={changePassword}
                  placeholder="Password"
                  required
                />
</div>
                
               <div  className="registerInput-div">

                {showPassword? <FaEye className="registerIcon" onClick={showHiddenPasword} />: <FaEyeSlash className="registerIcon" onClick={showHiddenPasword} />}
                <input
                  id="conPass" className="registerInputs"
                  type={ showPassword ? "text":"password" }
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={changeConfirmPassword}
                  placeholder="Confirm Password"
                  required
                />
                </div>
                <div className="registerInput-div">
                 
                <input id="regBtn" className="registerInputs" type="submit" value="Sign Up" />
                </div>
                
              </form>
              
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
