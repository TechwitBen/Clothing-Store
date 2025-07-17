import { createContext, useState,useEffect, useContext } from "react";
import axios from "axios"

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);


  useEffect(()=>{
    async function fetchCartItems(){
      try{
        const response = await axios.get("http://localhost:3000/api/cart");
     setCartItems(response.data)
      }
      catch(error){
console.error("Failed to fetch cart:", error)
      }
    }
    fetchCartItems();
  },[])


//  Add to cart and save to DB




  async function addToCart(product) {
   
      const itemExist = cartItems.find((item)=> item.id === product.id);
      if(itemExist){
        alert("Item is already in your Cart")
        return;
      }

      try{
        await axios.post("http://localhost:3000/api/cart",product)
       setCartItems((prev) =>[...prev, product]);
      }
      catch(error){
         console.error("Failed to save cart item:", error);
      }
       
  }
  


  return (
    <>
      <CartContext.Provider value={{ cartItems, addToCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
