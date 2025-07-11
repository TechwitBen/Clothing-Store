import "./Picture.css";
// import { useEffect, useState } from "react";

export default function Picture() {
  //  const [width, setWidth] = useState(window.innerWidth);






  //  useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <>
      <div
        className="picture-overal-div"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7870878/pexels-photo-7870878.jpeg")`,
        }}
      >
        <div className="picture-text-div">
          <h2 className="picture-text-h2">
            <span>30%</span> Discount for New shoppers.
          </h2>
          <p className="picture-text-p">Simple Style. Everyday Confidence.</p>
          <div className="">
            <button className="picture-text-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

// import "./Featured.css";
// import { useEffect, useState, useRef } from "react";
// import { IoPricetagsSharp } from "react-icons/io5";

// function FlashSale() {
//   const flashSale = [
//     { id: 1, name: "Classic T-Shirt", image: "https://ae-pic-a1.aliexpress-media.com/kf/S891119337ec846c1983cd6091d391974D.jpg_220x220q75.jpg_.avif" },
//     { id: 2, name: "Warm Hoodie", image: "https://via.placeholder.com/150" },
//     { id: 3, name: "Slim Fit Jeans", image: "https://ae-pic-a1.aliexpress-media.com/kf/S7955af9e4df94c91a65fef974ee3e1eeH.jpg_220x220q75.jpg_.avif" },
//     { id: 4, name: "Casual Sneakers", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/7226113/1.jpg?7629" },
//     { id: 5, name: "Leather Handbag", image: "https://ae-pic-a1.aliexpress-media.com/kf/Sbb1f5bca76de40918d096b4bd69c5b93S.jpg_220x220q75.jpg_.avif" },
//     { id: 6, name: "Denim Jacket", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/25/637364/1.jpg?1253" },
//     { id: 7, name: "Summer Dress", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/1792662/1.jpg?3110" },
//     { id: 8, name: "High Heels", image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/8503853/1.jpg?7030" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCards = 3;
//   const totalCards = flashSale.length;

//   const sliderRef = useRef(null);

//   // Auto scroll
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goNext();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const goNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 >= totalCards - visibleCards + 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goBack = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? totalCards - visibleCards : prevIndex - 1
//     );
//   };

//   return (
//     <div className="discount-overal">
//       <div className="flash-sales-sub">
//         <nav className="flash-nav">
//           <h2 className="flash-text"><IoPricetagsSharp /> EXCLUSIVE WEARS</h2>
//         </nav>
//       </div>

//       <div className="slider-wrapper">
//         <button className="leftBtn" onClick={goBack}>◀</button>

//         <div className="slider-window">
//           <div
//             className="slider-track"
//             ref={sliderRef}
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//               width: `${(totalCards / visibleCards) * 100}%`,
//             }}
//           >
//             {flashSale.map((item) => (
//               <div className="flash-flex" key={item.id}>
//                 <div className="flex1">
//                   <img src={item.image} className="flex1Img" />
//                   <button className="flex1-btn border-2 border-black">Get Now</button>
//                 </div>
//                 <div className="flex2">
//                   <div className="flex2-Div">
//                     <h2>{item.name}</h2>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="rightBtn" onClick={goNext}>▶</button>
//       </div>
//     </div>
//   );
// }

// export default FlashSale;
