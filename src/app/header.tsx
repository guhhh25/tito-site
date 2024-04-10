import Image from "next/image";
import { useEffect, useState } from "react";
import getQuotation from "./Utils/GetQuotation";
//import FormatData from "./Utils/FormatData";

interface usdQuotationValueProps {
  ask: string;
  bid: string;
  USDBRL: any;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [usdQuotationValue, setUsdQuotationValue] = useState<usdQuotationValueProps>();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let actualQuotation = await getQuotation();

        setUsdQuotationValue(actualQuotation as any);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    };

    fetchData();
  }, []);

  //let formattedData = FormatData(usdQuotationValue);

  return (
    <div className="fixed z-10 w-full">
      <div
        style={{ transition: "background-color 0.3s ease" }}
        className={`flex items-center justify-between bg-white p-5 ${
          isScrolled ? "bg-white bg-opacity-40" : ""
        }`}
      >
        <Image
          className={`cursor-pointer ${isScrolled ? "opacity-40" : ""}`}
          alt="tito logo"
          width={110}
          height={110}
          src="/logo-tito-transparente.png"
        />
        {/* Botão de menu para dispositivos móveis */}
        <button
          className="block lg:hidden focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {/* Menu desktop */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8 links text-sm">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            SOBRE NÓS
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            SERVIÇOS
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            COMUNICAÇÃO
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            QUALIDADE
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">
            CONTATO
          </a>
          <a
            href="/contact"
            id="hoverItem"
            className="text-gray-700 hover:text-blue-600"
          >
            DOLAR
          </a>
          <div id="popup" className="popup">
            <p className="text-xl text-gray-500 mt-2 mb-2">COMERCIAL</p>
            <div className="flex items-center">
              <p className="text-green-500   font-bold text-[16px]">COMPRA:</p>
              <span className=" ml-1 font-bold ">
                ${usdQuotationValue?.USDBRL.bid.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-red-500 font-bold text-[16px]">VENDA:</p>
              <span className="ml-1 font-bold">
                ${usdQuotationValue?.USDBRL.ask.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-green-500 mb-1  font-bold text-[16px]">
                VALOR MAIS ALTO:
              </p>
              <span className=" ml-1 font-bold ">
                ${usdQuotationValue?.USDBRL.high.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-red-500 font-bold text-[16px]">
                VALOR MAIS BAIXO:
              </p>
              <span className="ml-1 font-bold">
                ${usdQuotationValue?.USDBRL.low.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-yellow-500 font-bold text-[16px]">
                DOLAR PTAX EM:
              </p>
              <span className="ml-1 font-bold">10/04/2024</span>
            </div>
          </div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            INTRANET
          </button>
        </div>
      </div>
      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-white z-10 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="p-5 mt-2">
          <a href="#">
            {" "}
            <Image
              className="cursor-pointer mb-5"
              alt="tito logo"
              width={110}
              height={110}
              src="/logo-tito-white.png"
            />
          </a>
          <a
            href="#"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            SOBRE NÓS
          </a>
          <a
            href="#"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            SERVIÇOS
          </a>
          <a
            href="#"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            COMUNICAÇÃO
          </a>
          <a
            href="#"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            QUALIDADE
          </a>
          <a
            href="/contact"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            CONTATO
          </a>
          <a
            href="/contact"
            id="hoverItem"
            className="block mb-3 py-2 border-b-2 border-bottom hover:text-blue-700"
          >
            DOLAR
          </a>
          <div id="popup" className="popup">
            <p className="text-xl text-gray-500 mt-2 mb-2">COMERCIAL</p>
            <div className="flex items-center">
              <p className="text-green-500   font-bold text-[16px]">COMPRA:</p>
              <span className=" ml-1 font-bold ">
                ${usdQuotationValue?.USDBRL.bid.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-red-500 font-bold text-[16px]">VENDA:</p>
              <span className="ml-1 font-bold">
                ${usdQuotationValue?.USDBRL.ask.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-green-500 mb-1  font-bold text-[16px]">
                VALOR MAIS ALTO:
              </p>
              <span className=" ml-1 font-bold ">
                ${usdQuotationValue?.USDBRL.high.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-red-500 font-bold text-[16px]">
                VALOR MAIS BAIXO:
              </p>
              <span className="ml-1 font-bold">
                ${usdQuotationValue?.USDBRL.low.substring(0, 4)}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-yellow-500 font-bold text-[16px]">
                DOLAR PTAX EM:
              </p>
              <span className="ml-1 font-bold">10/04/2024</span>
            </div>
          </div>
        
          
          <button className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">
            Global View
          </button>
        </div>
      </div>
    </div>
  );
}
