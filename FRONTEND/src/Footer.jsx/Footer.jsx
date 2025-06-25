import "./footer.css"
import { IoPersonOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer(){

    return(<>
    {/* OVERAL FOOTER DIV */}
    <div className="footer-overal-div">

<div className="footer-text-div">

<div className="footer-flexItem footer-flex1">
<h2 className="flextext">Ben's Clothing</h2>
<div>
<h2>About Us</h2>
<p>  or a television series. The most common meaning is a projectile with</p>
</div>

</div>
<div className="footer-flexItem footer-flex2">
    <div className="footer-gridItem footer-grid1"><li>Services</li></div>
    <div className="footer-gridItem footer-grid1"> <li>Company</li></div>
    <div className="footer-gridItem footer-grid1"> <li>Contact Us</li></div>
    <div className="footer-gridItem"></div>
    <div className="footer-gridItem"></div>
    <div className="footer-gridItem"></div>
    <div className="footer-gridItem"><li>Planning</li></div>
    <div className="footer-gridItem"><li>Who We Are</li></div>
    <div className="footer-gridItem"><li>Call:</li></div>
    <div className="footer-gridItem"><li>Research</li></div>
    <div className="footer-gridItem"><li>Our Services</li></div>
    <div className="footer-gridItem"> <li>+2349012802102</li></div>
    <div className="footer-gridItem"> <li>Consulting</li></div>
    <div className="footer-gridItem"><li>Our Clients</li></div>
    <div className="footer-gridItem"></div>
    <div className="footer-gridItem"><li>Analysis</li></div>
    <div className="footer-gridItem"><li>Pricing</li></div>
    <div className="footer-gridItem"> <li>Email:</li></div>
    <div className="footer-gridItem"> <li>user Testing</li></div>
    <div className="footer-gridItem">  <li>Contact Us</li></div>
    <div className="footer-gridItem"> <li>benClothing21@</li></div>
</div>


</div>

{/* LOCATION AND SOCIAL MEDIA DIV */}
<div className="footer-location-div">
    <div className="footer-location-flexItem ">
<FaLocationDot  className="footerIcon"/>
<h2>Yaba Lagos, Nigeria</h2>
    </div>
    <div className="footer-location-flexItem">
        <FaPhoneAlt  className="footerIcon"/>
        <h2>(+234)8166613907</h2>
    </div>
    <div className="footer-location-flexItem">
       <IoMail  className="footerIcon"/>
        <h2>benClothing21@gmail</h2>
    </div>
    <div className="footer-location-flexItem loca1">
        <IoLogoWhatsapp  className="footerIcon whatIcon"/>
       <FaFacebook  className="footerIcon faceIcon"/>
        <FaXTwitter className="footerIcon XIcon" />
    </div>
</div>

<div className="hr-div">


<h2>@ 2025 Ben's Enterprises. All Rights Reserved</h2>
</div>


    </div>
    
    </>
    )
}