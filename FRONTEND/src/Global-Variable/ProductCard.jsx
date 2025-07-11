import { useCart } from "../Global-Variable/CartContext";
import "./ProductCard.css";

function ProductCard(props) {
  const { addToCart } = useCart();

  return (
    <>
      {/* GRID INDIVIDUAL STYLING */}
      <div className="grid-item shadow-xl">
        <div className="inside-grid1">
          <img src={props.product.image} className="product-image shadow-lg" />
        </div>
        <div className="inside-grid2">
          {/* GRID TEXT FOR NAME OF PRODUCT PRICES AND THE REST */}
          <h2 className="grid-text ptext1">{props.product.type}</h2>
          <h2 className="grid-text ptext2">{props.product.name}</h2>
          {/* DIV FOR THE ADD TO CART  */}
          <div className="addtocart">
            <p className="grid-text ptext3">${props.product.price}</p>
            <button onClick={() => addToCart(props.product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
