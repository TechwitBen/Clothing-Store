import "./About.css";
import { IoPersonOutline } from "react-icons/io5";
import { PiTruck } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GoShieldLock } from "react-icons/go";
import { FaClockRotateLeft } from "react-icons/fa6";


export default function Delivery() {
  return (
    <>
      <div className="about-overal-div">
        <div className="about-flex-div">
          <div className="about-grid about-grid1">
            <div className="about-grid1-div">
              <PiTruck className="Abouticon"/>
              <h2>Free Delivery</h2>
              <p>
                Enjoy fast and free shipping on all local orders — no minimum purchase.
              </p>
            </div>
          </div>
          <div className="about-grid about-grid2">
            <div className="about-grid1-div">
             <RiCustomerService2Fill  className="Abouticon" />
              <h2>Online Support</h2>
              <p>
                Our team is here 24/7 to help with your questions or concerns.
                at your door


              </p>
            </div>
          </div>
          <div className="about-grid about-grid3">
            <div className="about-grid1-div">
             <GoShieldLock   className="Abouticon" />
              <h2>Secured Payment</h2>
              <p>
               Shop safely with encrypted payments and trusted checkout options.
              </p>
            </div>
          </div>
          <div className="about-grid about-grid4">
            <div className="about-grid1-div">
             <FaClockRotateLeft  className="Abouticon" />
              <h2>14 Days Refund</h2>
              <p>
                Return or exchange your items within 14 days — no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
