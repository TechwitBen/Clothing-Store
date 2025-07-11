import "./Grids.css";

export default function Grids() {
  return (
    <>
      <div className="Grid-Overal">
        <div className="Grid-item  Griditem1">
          {/* <div className="Griditem1-div1">
           
          </div> */}
          <div className="Griditem1-div">
            <div className="Griditem1-div-div">
              <h2>EyeWear</h2>
              <p>SW-18 Trend</p>
              <button className="border-2 border-black">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="Grid-item Griditem2">
          <div className="Griditem2-div">
            <h2>SALE UPTO</h2>
            <p>50% OFF</p>
            <button className="border-2 border-black">Shop Now</button>
          </div>
        </div>
        <div className="Grid-item Griditem3">
          <div className="Griditem3-div">
            <h2>Summer Trouser Suit</h2>
          </div>
        </div>
        <div className="Grid-item Griditem4">
          <div className="Griditem4-div">
            <h2>beauty Board</h2>
            <p>Wearing Cosmetics</p>
            <button className="border-2 border-black">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
