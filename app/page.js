import Image from "next/image";
import NavElement from "./compoenents/navbars/navbar";
import logoImage from "../public/logo.svg";

import Landing from "./sections/landing/landing";
import Offer from "./sections/offer/offer";
// import Gallery from "./sections/gallery/gallery";
import Gallery2 from "./sections/gallery/gallery2";
import Contact from "./sections/contact/contact";
import About from "./sections/about/about";
import Footer from "./sections/footer/footer";

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
