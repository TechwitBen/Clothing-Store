import "./Grids.css";

export default function Grids() {
  return (
    <>
      <div className="Grid-Overal">
        <div className="Grid-item  Griditem1">
          <div className="Griditem1-div1">
            {/* <img src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="Griditem1-div1-img" /> */}
          </div>
          <div className="Griditem1-div2">
            <div className="Griditem1-div2-div">
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
            <h2>Loviies beauty Board</h2>
            <p>Long Wearing Cosmetics</p>
            <button className="border-2 border-black">Shop Now</button>
          </div>
       </div>
      </div>
    </>
  );
}
