import "./Featured.css";
import { useEffect, useState } from "react";
// import axios from "axios";
// import { IoPricetagsSharp } from "react-icons/io5";
// import pics from  "../images/GirlwithBag.jpg"

function FlashSale() {
  const flashSale = [
    {
      id: 1,
      name: "Classic T-Shirt",

      image:
        "https://images.pexels.com/photos/32641974/pexels-photo-32641974.jpeg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Warm Hoodie",

      image:
        "https://images.pexels.com/photos/30479352/pexels-photo-30479352.jpeg",
    },
    {
      id: 3,
      name: "Slim Fit Jeans",

      image:
        "https://images.pexels.com/photos/4554202/pexels-photo-4554202.jpeg",
    },
    {
      id: 4,
      name: "Casual Sneakers",

      image:
        "https://images.pexels.com/photos/6211621/pexels-photo-6211621.jpeg",
    },
    {
      id: 5,
      name: "Leather Handbag",

      image:
        "https://images.pexels.com/photos/8151749/pexels-photo-8151749.jpeg",
    },
    {
      id: 6,
      name: "Denim Jacket",

      image:
        "https://images.unsplash.com/photo-1596703343516-57c8fe6282d7?q=80&w=561&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Summer Dress",

      image:
        "https://images.unsplash.com/photo-1632162451611-23b1eac58c3c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "High Heels",

      image:
        "https://images.unsplash.com/photo-1628607475982-bbd3b38ebaf2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Cargo Pants",

      image:
        "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=564&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Formal Blazer",

      image:
        "https://images.unsplash.com/photo-1723277171985-07c20f1876e1?q=80&w=605&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      name: "Backpack",

      image:
        "https://images.unsplash.com/photo-1570653321841-462dd6268561?q=80&w=544&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 12,
      name: "Sports Sneakers",

      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 13,
      name: "Cargo Pants",
      price: "$45",
      type: "Bottoms",
      image:
        "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=581&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 14,
      name: "Formal Blazer",
      price: "$90",
      type: "Outerwear",
      image:
        "https://images.unsplash.com/photo-1592878849122-facb97520f9e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 15,
      name: "Backpack",
      price: "$35",
      type: "Handbags",
      image:
        "https://images.unsplash.com/photo-1709899373206-26c623817a49?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 16,
      name: "Sports Sneakers",
      price: "$75",
      type: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 17,
      name: "Sports Sneakers",
      price: "$75",
      type: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 18,
      name: "Sports Sneakersss",
      price: "$75",
      type: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1612649924546-65aa67a6fdf9?q=80&w=480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);
  // const [visible, setVisible] = useState(0);

//   useEffect(() => {
//     if (!isMobile) {
//       setVisible(3);
//       // return () => clearInterval(interval);
//     } else {
//       setVisible(2);
//     }
//   }, [isMobile]);

//   useEffect(() => {
//     function handleResize() {
//   const mobile = window.innerWidth <= 768;
//   setIsMobile(mobile);
//   setVisible(mobile ? 2 : 3);
// }
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

  // console.log(visible)
  const visibleCards = 1;
  const totalCards = flashSale.length;

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + visibleCards;
      return nextIndex >= totalCards-2 ? 0 : nextIndex;
    });
  };

  const goBack = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - visibleCards;
      return nextIndex < 0 ? Math.max(totalCards - visibleCards, 0) : nextIndex;
    });
  };

  return (
    <>
      <div className="discount-overal">
        {/* FLASH-SALES */}
        <div className="flash-sales-sub">
          <nav className="flash-nav">
            <h2 className="flash-text">EXCLUSIVE WEARS</h2>
          </nav>
        </div>

        {/* GRIDS FOR FLASH SALES  */}
        <div className="flash-grid-overal">
          {/* INDIVIDUAL FLEX */}
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${(currentIndex / totalCards) * 100}%)`,
            }}
          >
            {flashSale.map((flashSale) => (
              <div className="flash-flex" key={flashSale.id}>
                {/* DIV INSIDE INDIVIDUAL FLEXS */}
                <div
                  className="flex1"
                  style={{ backgroundImage: `url(${flashSale.image})` }}
                >
                  {/* <img src={flashSale.image} className="flex1Img"/> */}
                  <button className="flex1-btn border-2 border-black">
                    Get Now
                  </button>
                </div>

                <div className="flex2">
                  <div className="flex2-Div">
                    <h2>{flashSale.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="leftBtn" onClick={goBack}>
            ◀
          </button>
          <button className="rightBtn" onClick={goNext}>
            {" "}
            ▶
          </button>
        </div>
      </div>
    </>
  );
}

export default FlashSale;
