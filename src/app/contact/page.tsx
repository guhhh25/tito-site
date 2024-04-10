"use client";
import ContactForm from "../components/contactForm";
import Path from "../components/path";
import Footer from "../footer";
import Header from "../header";

export default function Contact() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col items-start mx-4 mt-10">
            <Path link1="/" link2="/contact" namePath1="Home" namePath2="Contato"/>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
