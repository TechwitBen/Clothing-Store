import "./Profile.css";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { useState,useEffect } from "react";
import axios from "axios";


function Profile({ className, setProfile }) {
  let register = "/register";
  let login = "/login";


  const [isLogged, setIsLogged] = useState(false)


  useEffect(()=>{
    axios.get("http://localhost:3000/check-auth",{
        withCredentials:true,
    })
    .then(res=>{
        if(res.data.authenticated){
           setIsLogged(true)
        }
    }).catch(err=>{
        console.log("Auth check Failed",err)
    })
},[])

  async function handleLogout(){
try{
    const response = await axios.get("http://localhost:3000/logout",{
        withCredentials:true,
    })
    if(response.status === 200){
        alert(response.data.message)
    setIsLogged(response.data.authenticate)
    }else{
        alert(response.data.message)
    }
    
}catch(err){
    alert("Failed to logout")
    console.error(err)
}
   }

  return (
    <>
     
      <div className={`overal-profilediv ${className}`}>
        <FaXmark className="icon-mark" onClick={() => setProfile(false)} />

 {/* WHEN THE USER IS NOT SIGNED IN */}

            {!isLogged &&(
        <ul className="profile-container">

          <Link to={register}>
            
            <li className="profile-content">Register</li>
          </Link>
          <Link to={login}>
            
            <li className="profile-content">Login</li>
          </Link>
        </ul>
            )}

        {/* WHEN THE USER IS SIGNED IN */}
        {isLogged &&(
        <div>
            <input type="text" placeholder="user is signed in" />
            <input type="text" placeholder="user is signed in" />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )}
      </div>
    </>
  );
}

export default Profile;
