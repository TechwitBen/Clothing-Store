import { Routes, Route, useLocation } from "react-router-dom";
import About from "./AboutUsSection/About";
import Featured from "./FeaturedSection/Featured";
import Homepage from "./HomeSection/Homepage";
import Shop from "./ShopsSection/Shop";
import Contact from "./ContactSection/Contact";
import Profile from "./ProfileSection/Profile";
import Register from "./ProfileSection/Register";
import Login from "./ProfileSection/Login";

import CartViewPage from "./Global-Variable/CartViewPage";
import Product from "./ADMIN-PANEL/Product";
import Navigation from "./NavigationBar/Navigation";
import NewArrival from "./FeaturedSection/NewArrival";
import FlashSale from "./FeaturedSection/FlashSale";

import Grids from "./FeaturedSection/Grids";
import Delivery from "./OTHERSJSX/About";
import Blog from "./OTHERSJSX/Blog";
import Footer from "./Footer.jsx/Footer";
import Picture from "./FeaturedSection/Picture";

function App() {
  const location = useLocation();
  const hideNavOnRoutes = ["/login", "/register"];
  const shouldHideNav = hideNavOnRoutes.includes(location.pathname);

  return (
    <>
      {/* <Homepage /> */}
      {/* <Featured/> */}
      {/* <Register /> */}
      {!shouldHideNav && <Navigation />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Featured />
              <Picture />
              <FlashSale />
              <Grids />
              <Delivery />
              <Blog />
              <Footer />
              {/* <NewArrival />
              
              <Product />  */}
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/shopStore" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartViewPage />} />
        {/* FOR THE PROFILE LINKS  */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
