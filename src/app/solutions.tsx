import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Card from "./components/card";
import Title from "./components/title";

export default function Solutions() {
  return (
    <div className="flex flex-col  mt-10 mb-10 p-10  lg:p-20  2xl:text-center 2xl:justify-center">
      <Title title="SOLUÇÕES"  />
    
      <div className="flex flex-col  sm:flex-row sm:justify-between 2xl:justify-center flex-wrap">
        <Card
          image={"/solutions/truckcard.jpg"}
          title="Transporte Internacional"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. "
        />
        <Card
          image={"/solutions/card2.jpg"}
          title="Gestión Aduanera"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil."
        />
        <Card
          image={"/solutions/card3.jpg"}
          title="Logística Nacional"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil."
        />
      </div>
    </div>
  );
}
