import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Homepage.css";
import home1 from "../images/home.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";



// import axios from "axios";


function Homepage() {

  const backgroundImages = [home3, home1];
  const mobileImage = home2;


const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);
const [currentIndex, setCurrentIndex] = useState(0);


 

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, [backgroundImages]); 


  
   useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 850);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 


  return (
    <>
      <div
        className="home border-2 border-red-900"style={{
            backgroundImage: `url(${isMobile? mobileImage: "https://images.pexels.com/photos/9594674/pexels-photo-9594674.jpeg"})`,
          transition: "background-image 4s ease-in-out",
        }}>
       
        
        {/* DIV FOR THE TEXT SECTION */}
        <section id="section-id">
          <div className="border-2 border-transparent text-div">
            <div className=" text-div1">
              <h2 className="text1">Trendy. Affordable. Yours.</h2>
              <p className="text2">Get up to 30% off New Arrivals </p>

              {/* BUTTON DIV */}
              <div className="button-div-overal">
                <div className="button-div">
                  <button className="button">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;



// style={{
//           backgroundImage: `url(${
//             isMobile ? mobileImage : backgroundImages[currentIndex]
//           })`,
//           transition: "background-image 4s ease-in-out",
//         }}>

 