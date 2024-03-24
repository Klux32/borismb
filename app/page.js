import Image from "next/image";
import NavElement from "./compoenents/navbars/navbar";
import logoImage from "../public/logo.svg";

import Landing from "./pages/landing/landing";
import Offer from "./pages/offer/offer";
// import Gallery from "./pages/gallery/gallery";
import Gallery2 from "./pages/gallery/gallery2";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Footer from "./pages/footer/footer";

export default function Home() {
  return (
    <div>
      <NavElement 
      logo={logoImage} 
      style={"fixed-top text-light"} 
      styleNavUl={"me-auto text-dark"} 
      styleLogo={"order-0"} 
      styleNav={"order-2 ms-4 text-dark"} 
      styleOther={"order-3"} 
      search={false} 
      social={true} 
      authentication={false}
      />

      <Landing/>
      <Offer/>
      <About/>
      {/* <Gallery/> */}
      <Gallery2/>
      <Contact/>
      <Footer/>
    </div>
  );
}
