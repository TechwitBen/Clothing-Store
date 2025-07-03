import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import "./CartViewpage.css";
import { FaXmark } from "react-icons/fa6";

function CartViewPage() {
  const { cartItems } = useCart();
  const [width, setWidth] = useState(window.innerWidth) 


  useEffect(()=>{

    const handleResize = ()=>{
        setWidth(window.innerWidth)
    }
   window.addEventListener("resize",handleResize)
 return()=>{
    window.removeEventListener("resize",handleResize)
 }
},[])




  return (
    <>
      <div className="overal-cart-div">
        <div className="cart-flexContainer">
          <div className="cart-flex-item item1">
            <div className="item1-flex-item " id="item1flex1">
              <h2>Shopping Cart</h2>
              {/* <p>3Item</p> */}
              <p>{width}px</p>
            </div>

            {cartItems.map((cartItem) => (
              <div key={cartItem.id} className="item1-flex-item" id="item1flex2">
                <div className="item1flex2-item" id="item1flex2-div1">
                  {/* FOR THE IMAGE */}
                  <div className="item1flex2-div1-item" id="item1flex2-div1-item1">
   <img src={cartItem.image} style={{width:"100%",height:"100%"}} />
                  </div>

                  <div className="item1flex2-div1-item" id="item1flex2-div1-item2">
                    <p>{cartItem.type}</p>
                    <p>{cartItem.name}</p>
                  </div>
                </div>

                <div className="item1flex2-item" id="item1flex2-div2">
                  <button>+</button>
                  <button>3</button>
                  <button>-</button>
                </div>

                <div className="item1flex2-item " id="item1flex2-div3">
                  <p>{cartItem.price}.00</p>
                </div>

                <div className="item1flex2-item" id="item1flex2-div4">
                    
                  <FaXmark className="md:text-[18px]text-[15px]" />
                </div>
              </div>
            ))}
          </div>

          <div className="cart-flex-item item2" >
            <div className="item2-flex-item" id="item2-div1">
                <h2>Summary</h2>
                
            </div>

 <div className="item2-flex-item" id="item2-div2">
    <h2>Items: 3</h2>
    <p>$137.00</p>
 </div>
            <div className="item2-flex-item" id="item2-div3">
                <h2>Shipping</h2>
                <div>
                <input type="text" />
                 <FaXmark className="md:text-[18px]text-[15px] div3-div-icon" />
                 </div>
            </div>

            <div  className="item2-flex-item" id="item2-div4">
<p>Free Delivery</p>
<p>By Sea</p>
            </div>

            <div className="item2-flex-item" id="item2-div5">
                <h2>Given Code</h2>
                <div>
              <input type="text" />
               <FaXmark className="text-[20px] div5-div-icon" />
               </div>
            </div>
           
            <div className="item2-flex-item" id="item2-div6">
                <h2>Total Price</h2>
                <p>$137.00</p>
            </div>
 <div className="item2-btn-div">
    <button>CHECKOUT</button>
</div>

          </div>



        </div>
       
      </div>
    </>
  );
}

export default CartViewPage;
