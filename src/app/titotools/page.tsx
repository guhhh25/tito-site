"use client";
import Path from "../components/path";
import Footer from "../footer";
import Header from "../header";

export default function TitoTools() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex">
        <div className="flex flex-col items-start">
          <Path
            link1="/"
            namePath1="Home"
            namePath2="Ferramentas"
            link2="/titotools"
          />
          <div className="content p-10">
            <a
              href="/titotools/calculator"
              className="flex flex-row items-center text-white justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-tito-color leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:bg-[#21458d]"
            >
              Ferramenta para o cálculo do peso volumétrico
              <span className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path
                    fill="currentColor"
                    d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                  ></path>
                </svg>
              </span>
            </a>
            <a
              href="/titotools/converter"
              className="flex flex-row mt-5 items-center text-white justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-tito-color leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:bg-[#21458d]"
            >
              Conversor Monetário
              <span className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path
                    fill="currentColor"
                    d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
