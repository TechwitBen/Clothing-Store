import axios from "axios";
import ProductCard from "../Global-Variable/ProductCard";
import { useEffect, useState } from "react";
import "./Featured.css";

function NewArrival() {
  const [newArrival, setNewArrival] = useState([]);

  useEffect(() => {
    async function newArrivals() {
      try {
        const response = await axios.get("http://localhost:3000/newArrival");
        setNewArrival(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    newArrivals();
  }, []);
  return (
    <>
      <div className="new-overal">
        <nav className="newarrival-nav">
          <h2 className="newarrival-text">NEW ARRIVALS</h2>
        </nav>

        {/* OVERAL DIV FOR GRID */}
        <div className="Overal-new-grid-div">
          {newArrival.map((newProduct) => (
            <ProductCard key={newProduct.id} product={newProduct} />
          ))}
        </div>
      </div>
      {/* BUTTON SEE MORE  */}
      <div className="button1-overal">
        <div className="button1-sub">
          <button>
            See More
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
