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
import ContactForm from "./components/contactForm";
import BackToTopBtn from "./components/backToTopBtn";
import { useEffect, useState } from "react";
import Features from "./features";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Loading from "./components/loading";
import Contact from "./contact";
import Map from "./components/map";
import Mapa from "./components/map";

export default function Page() {
  const [isHidden, setIsHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 500) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    setIsLoading(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh] w-full">
          <Loading />
        </div>
      ) : (
        <div className="w-full ">
          <div>
            <Header />
            <Carrousel />
          </div>
          <div>
            <BackToTopBtn hidden={isHidden} />
            <Fade triggerOnce={true} delay={80} duration={800}>
              <AboutUs />
              <GlobalView />
              <Solutions />
              <Partnerships />
              <Features />
              <Contact/>
            </Fade>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
