import CardPartnerShip from "./components/cardPartnership";
import Title from "./components/title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import Card from "./components/card";
import Image from "next/image";

export default function Partnerships() {
  return (
    <div className="bg-white mt-20  p-5 sm:p-10 w-full mb-10 h-[500px] lg:h-[320px] 2xl:text-center 2xl:justify-center">
      <div className="flex flex-col  lg:flex-row lg:ml-10 lg:text-start 2xl:text-center mt-10 w-full">
        <div className="w-full">
          <Title title="PARCERIAS" />
          <div className="flex  lg:flex-row lg:items-center justify-around mt-5 flex-wrap">
            <Image
              src={"/partnerships/amacarga.png"}
              alt="amacarga"
              width={180}
              height={100}
              className="mt-5"
            />
             <Image
              src={"/partnerships/amcham2.png"}
              alt="amacarga"
              width={180}
              height={100}
              className="mt-5"
            />
             <Image
              src={"/partnerships/cambras.png"}
              alt="amacarga"
              width={180}
              height={100}
              className="mt-5"
            />
             <Image
              src={"/partnerships/camebra.png"}
              alt="amacarga"
              width={180}
              height={100}
              className="mt-5"
            />
             <Image
              src={"/partnerships/novo_dutcham.png"}
              alt="amacarga"
              width={180}
              height={100}
              className="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
