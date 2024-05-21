"use client";
import ConverterForm from "@//components/converterForm";
import Path from "@//components/path";
import Footer from "@//footer";
import Header from "@//header";

export default function Converter() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex justify-center items-center">
        <div className="flex flex-col items-start mx-4 mt-10">
          <Path
            link1="/"
            link2="/titotools"
            namePath1="Home"
            namePath2="Ferramentas"
            link3="/titotools/converter"
            namePath3="Conversor Monetario"
          />
          <div className="py-20 mt-20">
            <ConverterForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
