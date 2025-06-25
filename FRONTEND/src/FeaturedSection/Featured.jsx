import "./Featured.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Global-Variable/ProductCard";

function Featured() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function productItem() {
      try {
        const response = await axios.get("http://localhost:3000/featuredItem");
        setProducts(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    productItem();
  }, []);

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
