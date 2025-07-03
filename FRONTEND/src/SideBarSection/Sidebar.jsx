import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

function Sidebar({ className, setOpen }) {
  const [dropdown, setDropDown] = useState(false);
  const [catDropdown, setCatDropDown] = useState(false);

  function dropProfileList() {
    setDropDown((prev) => !prev);
  }
  function dropCategoryList() {
    setCatDropDown((prev) => !prev);
  }

  return (
    <>
      <div className={`side-overal ${className}`}>
        {/* <div className="x-icon-div">
          <FaXmark className="close-btn" onClick={() => setOpen(false)} />
        </div> */}
        <div className="side-bar">
          <ul className="list-container">
            <p className="list-items " id="firstList">
              Ben's Clothings
            </p>

            <li className="list-items" id="secondtList" onClick={dropProfileList}>
              <div>
                <ion-icon
                  name="person-circle-outline"
                  class="text-white"
                ></ion-icon>
                Profile
              </div>

              <ion-icon
                name={dropdown ? "person-circle-outline" : "list-outline"}
                class="text-white pr-1"
                onClick={dropCategoryList}
              ></ion-icon>
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

            <li className="list-items" id="secondtList" onClick={dropCategoryList}>
              <div>
                <ion-icon name="list-outline" 
                class="text-white"
                ></ion-icon>
                Category
              </div>

              <ion-icon
                name={catDropdown ? "person-circle-outline" : "list-outline"}
                class="text-white pr-1"
                onClick={dropCategoryList}
              ></ion-icon>
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
