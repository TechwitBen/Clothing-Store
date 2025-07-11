import "./Navigation.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import Profile from "../ProfileSection/Profile";
import Sidebar from "../SideBarSection/Sidebar";
import { useCart } from "../Global-Variable/CartContext";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const { cartItems } = useCart();
  const [cart, setCart] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const navigate = useNavigate();

  let home = "/";
  let about = "/about";
  let shopStore = "/shopStore";

  let contact = "/contact";
  let cartPage = "/cart";

  useEffect(() => {
    const removeSideBar = (event) => {
      if (
        !event.target.closest(".side-overal") &&
        !event.target.closest(".menu-text")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", removeSideBar);

    return () => {
      document.removeEventListener("click", removeSideBar);
    };
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCart(true);
    } else {
      setCart(false);
    }
  }, [cartItems]);

  const cartClick = () => {
    if (cartItems.length < 1) {
      alert("Your Cart is Empty");
      navigate("/");
    } else {
      null;
    }
  };

  return (
    <>
      {/* NAVIGATION BAR */}
      <nav>
        {/* OVERALL DIV CONTAINING THE NAV LINKS */}
        <div className="overal-nav shadow-lg">
          {/* FOR THE IMAGE */}
          <ul className="first-nav">
            <li>
              <h1 className="text-[27px] font-bold  first-nav-text">
                Ben's clothing
              </h1>
            </li>
          </ul>

          {/* FOR THE CENTER LINKS */}

          <ul className="second-nav">
            <Link to={home}>
              <li className="second-nav-text">Home</li>
            </Link>
            <Link to={about}>
              <li className="second-nav-text">About Us</li>
            </Link>
            <Link to={shopStore}>
              <li className="second-nav-text">Shop/Store</li>
            </Link>{" "}
            <Link to={contact}>
              <li className="second-nav-text">Contact</li>
            </Link>
          </ul>

          {/* FOR THE ICONS AT THE RIGHT HAND SIDE*/}
          <ul className="third-nav">
            <li className="third-nav-text " id="thirdnav-input">
              <LuSearch className="searchIicon" />
              <input className="searchInput" type="text" />
            </li>
            {/* THE SHOPPING CART ICON HAS TWO ELEMENTS IN IT  */}

            <li className="cartlist" onClick={cartClick}>
              <Link to={cartPage}>
                <div className="third-nav-text icon2">
                  <IoCartOutline className="cart-icon" />
                  Cart
                  <p
                    className="badge"
                    style={{ display: cart ? "flex" : "none" }}
                  >
                    {cartItems.length}
                  </p>
                </div>
              </Link>
            </li>

            <li
              className="third-nav-text person-icon"
              onClick={() => setProfile((prev) => !prev)}
            >
              <IoPersonOutline className="cart-icon" /> Account
            </li>

            <li
              className="menu-text"
              onClick={(e) => {
                e.stopPropagation(); // Stops the click from reaching document
                setOpen(!open);
              }}
            >
              {open ? (
                <FaXmark className="close-btn" />
              ) : (
                <IoMenu className="close-btn" />
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar className={open ? "open" : ""} setOpen={setOpen} />
      <Profile className={profile ? "" : "visible"} setProfile={setProfile} />
    </>
  );
}

export default Navigation;
