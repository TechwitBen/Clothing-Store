import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

function Sidebar({ className, setOpen }) {
  const [dropdown, setDropDown] = useState(false);
  const [catDropdown, setCatDropDown] = useState(false);

  return (
    <>
      <div className={`side-overal ${className}`}>
        <div className="side-bar">
          <ul className="list-container">
            <p className="list-items " id="firstList">
              Ben's Clothings
            </p>

            <li
              className="list-items"
              id="secondtList"
              onClick={() => setDropDown((prev) => !prev)}
            >
              <div>
                <ion-icon
                  name="person-circle-outline"
                  class="text-white"
                ></ion-icon>
                Profile
              </div>

              {dropdown ? (
                <IoIosArrowUp className="md:text-[20px] text-[15px] text-white pr-1 " />
              ) : (
                <IoIosArrowDown className="md:text-[20px] text-[15px] text-white pr-1" />
              )}
            </li>

            {dropdown && (
              <div className="List-div" id="thirdList">
                <Link to="/register">
                  <li className="divList">Register</li>
                </Link>
                <Link to="/login">
                  <li className="divList">Login</li>
                </Link>
              </div>
            )}

            <li
              className="list-items"
              id="secondtList"
              onClick={() => setCatDropDown((prev) => !prev)}
            >
              <div>
                <ion-icon name="list-outline" class="text-white"></ion-icon>
                Category
              </div>

              {catDropdown ? (
                <IoIosArrowUp className="md:text-[20px] text-[15px] text-white pr-1 " />
              ) : (
                <IoIosArrowDown className="md:text-[20px] text-[15px] text-white pr-1" />
              )}
            </li>

            {catDropdown && (
              <div className="List-div" id="thirdList">
                <li className="divList">Men's Collection</li>
                <li className="divList">Female Collection</li>
                <li className="divList">Accessories</li>
              </div>
            )}

            <li className="list-items" id="fifthList">
              Help
              <ion-icon
                name="help-circle-outline"
                class="text-white"
              ></ion-icon>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
