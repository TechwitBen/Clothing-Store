import "./Featured.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Global-Variable/ProductCard";

function Featured() {
  // const [products, setProducts] = useState([]);

  
//  I DID THE BACKEND FOR THIS BUT I CAN'T RUN IT ON VERCEL OR GITHUB SO I JUST PASTED THE PRODUCTS HERE INSTEAD 
  const products = [
    {
      id: 1,
      name: "White Classic T-Shirt",
      price: "25",
      type: "Tops",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/29/2130283/1.jpg?8886", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Four in one T-shirt",
      price: "50",
      type: "Tops",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlZSUyMHNoaXJ0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Silver Wrist Watch",
      price: "40",
      type: "Accessories",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/3385352/1.jpg?4789",
    },
    {
      id: 4,
      name: "leather Wrist Watch",
      price: "60",
      type: "Wrist watch",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/1476593/1.jpg?9428",
    },
    {
      id: 5,
      name: "Peach Baggy Pants",
      price: "80",
      type: "Pants",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/4852004/1.jpg?2201",
    },
    {
      id: 6,
      name: "Denim Jacket",
      price: "70",
      type: "Outerwear",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/67/594167/1.jpg?4582",
    },
    {
      id: 7,
      name: "Summer Dress",
      price: "55",
      type: "Dresses",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/6343152/1.jpg?8585",
    },
    {
      id: 8,
      name: "High Heels",
      price: "65",
      type: "Footwear",
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/1274852/1.jpg?6242",
    },
    
  ];


  // useEffect(() => {
  //   async function productItem() {
  //     try {
  //       const response = await axios.get("http://localhost:3000/featuredItem");
  //       setProducts(response.data);
  //       console.log(response.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   productItem();
  // }, []);

  return (
    <>
      <div>
        {/* BEST SELLING SECTION UNDER THE FEATURES COLLECTION */}
        <div className="Overal-div">
          {/* HEADER FOR THE FEATURED COLLECTION NAME  */}
          <header className="header">
            <div className="second-head">
              <h2 className="header-text">FEATURED COLLECTIONS</h2>
              <hr />
            </div>
          </header>
          <div className="overal-best">
            {/* BEST SELLING TEXT */}
            {/* <nav className="best-nav">
              <h2 className="best-text">BEST SELLING</h2>
            </nav> */}

            {/* OVERAL DIV FOR GRID */}
            <div className="Overal-grid-div">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;

// .slider-wrapper {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;
//   position: relative;
//   margin-top: 1rem;
//   overflow: hidden;
// }

// .slider-window {
//   width: 1275px; /* 3 cards * 425px each */
//   overflow: hidden;
// }

// .slider-track {
//   display: flex;
//   transition: transform 0.6s ease-in-out;
// }

// .flash-flex {
//   min-width: 425px;
//   height: 450px;
//   background: white;
//   border-radius: 12px;
//   overflow: hidden;
//   margin-right: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: column;
// }

// .flex1 {
//   height: 70%;
//   position: relative;
// }

// .flex1Img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .flex1-btn {
//   position: absolute;
//   bottom: 10px;
//   left: 10px;
//   background: white;
//   padding: 5px 10px;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 5px;
// }

// .flex2 {
//   padding: 1rem;
//   text-align: center;
// }

// .leftBtn,
// .rightBtn {
//   font-size: 2rem;
//   background: none;
//   border: none;
//   cursor: pointer;
//   z-index: 2;
// }
