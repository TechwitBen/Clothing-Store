import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import "./CartViewpage.css";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function CartViewPage() {
  const { cartItems } = useCart();
  const [dropDown, setDropDown] = useState(false);
  const [numberInput, setNumberInput] = useState(0);
  const [number, setNumber] = useState(1);

  const [width, setWidth] = useState(window.innerWidth);

  function handleNumberInput(e) {
    const { name, value } = e.target;
  }

  function increment() {
    setNumber(number + 1);
  }
  function decrement() {
    setNumber(number - 1);
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="overal-cart-div">
        <div className="cart-flexContainer shadow-lg">
          <div className="cart-flex-item item1">
            <div className="item1-flex-item " id="item1flex1">
              <h2>Shopping Cart</h2>
              {/* <p>3Item</p> */}
              <p>{cartItems.length}items</p>
            </div>

            {cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="item1-flex-item"
                id="item1flex2"
              >
                <div className="item1flex2-item" id="item1flex2-div1">
                  {/* FOR THE IMAGE */}
                  <div
                    className="item1flex2-div1-item"
                    id="item1flex2-div1-item1"
                  >
                    <img
                      src={cartItem.image}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>

                  <div
                    className="item1flex2-div1-item"
                    id="item1flex2-div1-item2"
                  >
                    <p className="flex2-text1">{cartItem.type}</p>
                    <p className="flex2-text2">{cartItem.name}</p>
                  </div>
                </div>

                <div className="item1flex2-item" id="item1flex2-div2">
                  <button className="dec-Inc-button" onClick={increment}>
                    +
                  </button>
                  <button className="dec-Inc-button">{number}</button>
                  <button className="dec-Inc-button" onClick={decrement}>
                    {" "}
                    -
                  </button>
                </div>

                <div className="item1flex2-item " id="item1flex2-div3">
                  <p>${cartItem.price}.00</p>
                </div>

                <div className="item1flex2-item" id="item1flex2-div4">
                  <FaXmark className="md:text-[18px]text-[15px]" />
                </div>
              </div>
            ))}
          </div>

          <div className="cart-flex-item item2">
            <div className="item2-flex-item" id="item2-div1">
              <h2>Summary</h2>
            </div>

            <div className="item2-flex-item" id="item2-div2">
              <h2>ITEMS:{cartItems.length}</h2>
              <p>$137.00</p>
            </div>
            <div className="item2-flex-item" id="item2-div3">
              <h2>SHIPPING</h2>
              <div>
                <input type="text" placeholder="Standard Delivery - $5.00" />
                {dropDown ? (
                  <IoIosArrowUp
                    className="md:text-[20px] text-[15px] div3-div-icon"
                    onClick={() => setDropDown(false)}
                  />
                ) : (
                  <IoIosArrowDown
                    className="md:text-[20px] text-[15px] div3-div-icon"
                    onClick={() => setDropDown(true)}
                  />
                )}
              </div>
            </div>
            {dropDown && (
              <div className="item2-flex-item" id="item2-div4">
                <p>Free Delivery</p>
                <p>By Sea</p>
              </div>
            )}
            <div className="item2-flex-item" id="item2-div5">
              <h2>GIVE CODE</h2>
              <div>
                <input type="text" placeholder="Enter your code" />
                <FaXmark className="md:text-[20px] text-[15px] div5-div-icon" />
              </div>
            </div>

            <div className="item2-flex-item" id="item2-div6">
              <h2>TOTAL PRICE</h2>
              <p>$137.00</p>
            </div>
            <div className="item2-btn-div">
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="backDiv">
            <IoIosArrowRoundBack className="text-[30px]" /> <p>Back</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CartViewPage;

// <ion-icon
//   name={catDropdown ? "person-circle-outline" : "list-outline"}
//   class="text-white pr-1"
//   onClick={dropCategoryList}
// ></ion-icon>
