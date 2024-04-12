"use client";
import InternationalLogistic from "../InternationalLogistic";
import Path from "../components/path";
import Footer from "../footer";
import Header from "../header";

export default function InternationalLogistics() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex">
        <div className="flex flex-col items-start">
          <Path
            link1="/"
            namePath1="Home"
            namePath2="Logística Internacional"
            link2="/internationallogistics"
          />
          <div className="content p-10">
            <p className="text-lg">
              As competências que a TITO desenvolveu, amparadas em modernos
              sistemas de gerenciamento dos fluxos, garantem agilidade e
              visibilidade nos embarques de Agenciamento de Cargas Marítimas,
              Aéreas e Terrestres.
            </p>

           <InternationalLogistic/>
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
