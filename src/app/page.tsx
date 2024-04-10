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
import Planning from "./planning";

export default function page() {
  return (
    <div className="w-full">
      <Header />
      <Carrousel />
      <div>
        <Fade triggerOnce={true} delay={500} duration={800}>
          <AboutUs />
          <Planning/>
          <Solutions />
          <GlobalView />
        </Fade>
        <Footer />
      </div>
    </div>
  );
}
