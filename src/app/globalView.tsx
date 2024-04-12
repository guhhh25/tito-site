import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "./components/title";

export default function GlobalView() {
  return (
    <div className="bg-white p-10 w-full mb-10">
      <div className="flex flex-col  lg:flex-row lg:ml-10 lg:text-start mt-10 w-full">
        <div className="w-full">
          <Title title="GLOBAL VIEW"/>
          <p className="tracking-wider text-xl mt-5 w-[90%]">
            Tenha uma visão integrada de todos os seus processos aduaneiros em
            tempo real e em um só lugar: essa é a principal vantagem do
            GlobalView, o portal que permite o gerenciamento completo de dados
            para a sua empresa. Com essa ferramenta, os gestores podem monitorar
            os principais indicadores de desempenho e, ainda, tem acesso às
            informações necessárias para uma tomada de decisão mais precisa.
          </p>
        </div>
        <div className="w-[100%]  lg:mr-5">
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            interval={3200}
            className="mb-10"
          >
             <div className="mt-5 lg:mt-0">
              <Image
                src={"/globalView/globalview1.png"}
                height={1000}
                width={1000}
                alt="map"
                className=" h-[200px] w-[700px] sm:h-[250px]  lg:w-[400px] xl:h-[300px]"
              />
            </div>
            <div className="mt-5 lg:mt-0">
              <Image
                src={"/globalView/globalview2.png"}
                height={1000}
                width={1000}
                alt="map"
                className=" h-[200px] w-[700px] sm:h-[300px]  lg:w-[400px] xl:h-[300px]"
              />
            </div>
            <div className="mt-5 lg:mt-0">
              <Image
                src={"/globalView/global-view1.png"}
                height={1000}
                width={1000}
                alt="map"
                className=" h-[200px] w-[700px] sm:h-[300px]  lg:w-[400px] xl:h-[300px]"
              />
            </div>
            <div className="mt-5 lg:mt-0">
              <Image
                src={"/globalView/global-view2.png"}
                height={1000}
                width={1000}
                alt="map"
                className=" h-[200px] w-[700px] sm:h-[300px]  lg:w-[400px] xl:h-[300px]"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
