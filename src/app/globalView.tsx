import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "./components/title";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function GlobalView() {
  return (
    <div className="flex justify-center items-center px-10 lg:px-20 py-10 ">
      <div className=" flex flex-col max-w-[1720px] justify-center items-center  w-full rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:flex-row">
 
       
          <Image
            height={300}
            width={1000}
            alt="alguma"
            className="h- w-full rounded-t-lg  md:h-[350px] md:w-[600px] md:!rounded-none md:!rounded-s-lg"
            src="/globalView/globalview1.png"
          />
         
     
        <div className="flex flex-col text-black justify-start p-6">
          <Title title="GLOBAL VIEW" />
          <p className="mb-4 text-black mt-5">
            O GlobalView fornece aos clientes e operadores dados de status em
            tempo real de seus processos no Mapa. O aplicativo fornece uma visão
            geral integrada de despacho, logística nos mais diversos modais,
            sendo eles aéreo, marítimo e rodoviário, incluindo ETA, ETD,
            documentos dentre outras funcionalidades.
          </p>
          <a
            href="/globalview"
            className="underline text-black hover:text-blue-500"
          >
            Para saber mais clique aqui!
          </a>
        </div>
      </div>
    </div>
  );
}
