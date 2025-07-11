import { useState } from "react";
import axios from "axios";

function Product() {
  const [submitType, setSubmitType] = useState("");
  const [inputText, setInputText] = useState({
    name: "",
    price: "",
    type: "",
    image: "",
  });

  // const [products,setProducts] = useState([{}])

  function handleNewProduct(e) {
    const { name, value } = e.target;

    setInputText((prevProductInput) => ({
      ...prevProductInput,
      [name]: value,
    }));
  }

  // function addProduct(){
  // setProducts((preValue)=>{
  //   return [...preValue,
  //     inputText
  //   ]
  // })
  //   }

  async function handleProductSubmit(event, type) {
    event.preventDefault();
    const endPoint = type === "featured" ? "/featuredItem" : "/newArrival";

    try {
      await axios.post(`http://localhost:3000${endPoint}`, inputText);
      alert("item Sent!");
      setInputText({ name: "", price: "", type: "", image: "" });
      setSubmitType("");
    } catch (err) {
      console.error(err);
      alert("Failed to send item. Please try again.");
    }
  }

  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: submitType === "featured" ? "blue" : "",
          color: submitType === "featured" ? "white" : "",
        }}
        onClick={() => setSubmitType("featured")}
      >
        Best Selling
      </button>
      <button
        type="button"
        style={{
          backgroundColor: submitType === "newArrival" ? "blue" : "",
          color: submitType === "newArrival" ? "blue" : "",
        }}
        onClick={() => setSubmitType("newArrival")}
      >
        for New Arrival
      </button>
      <form onSubmit={(event) => handleProductSubmit(event, submitType)}>
        <input
          type="text"
          name="name"
          onChange={handleNewProduct}
          placeholder="name of products"
          value={inputText.name}
        />

        <input
          type="text"
          name="price"
          onChange={handleNewProduct}
          placeholder="price products in $"
          value={inputText.price}
        />

        <input
          type="text"
          name="type"
          onChange={handleNewProduct}
          placeholder="type of products"
          value={inputText.type}
        />

        <input
          type="text"
          name="image"
          onChange={handleNewProduct}
          placeholder="Image URL link"
          value={inputText.image}
        />

        <input type="submit" value="Add Product" />
      </form>
     
    </>
  );
}

export default Product;
