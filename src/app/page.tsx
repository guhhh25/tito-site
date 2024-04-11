"use client";
import "./globals.css";
import "typeface-roboto";
import Header from "../app/header";
import Carrousel from "../app/carrousel";
import Solutions from "../app/solutions";
import GlobalView from "../app/globalView";
import { Fade } from "react-awesome-reveal";
import AboutUs from "../app/aboutUs";
import Footer from "../app/footer";
import InternationalLogistic from "./InternationalLogistic";
import Partnerships from "./partnerships";

export default function page() {
  return (
    <div className="w-full">
      <Header />
      <Carrousel />
      <div>
        <Fade triggerOnce={true} delay={80} duration={800}>
          <AboutUs />
          <GlobalView />
          <Solutions />
          <Partnerships/>
        </Fade>
        <Footer />
      </div>
    </div>
  );
}
