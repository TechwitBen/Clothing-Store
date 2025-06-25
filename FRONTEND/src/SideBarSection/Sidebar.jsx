import "./Sidebar.css";
import { FaXmark } from "react-icons/fa6";

function Sidebar({ className, setOpen }) {
  return (
    <>
      <div className={`side-overal ${className}`}>
        {/* <div className="x-icon-div">
          <FaXmark className="close-btn" onClick={() => setOpen(false)} />
        </div> */}
        <div className="side-bar">
          <ul className="list-container">
            <p className="list-items list1">Ben's Clothings</p>
            <li className="list-items list2 list"><ion-icon name="person-circle-outline"class="text-white"></ion-icon>Profile</li>
            <li className="list-items list2 list"><ion-icon name="list-outline" class="text-white" ></ion-icon>Categories</li>
            <li className="list-items list2 list4">Help <ion-icon name="help-circle-outline" class="text-white"></ion-icon></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
