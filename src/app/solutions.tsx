import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Card from "./components/card";
import Title from "./components/title";

export default function Solutions() {
  return (
    <div className=" mt-10 mb-10 p-10  lg:p-20">
      <Title title="SOLUÇÕES"/>

      <div className="flex flex-col sm:flex-row sm:justify-between 2xl:justify-center flex-wrap">
        <Card
          image={"/card/img-servico.jpeg"}
          title="Titulo de serviço"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
              et perferendis eaque, exercitationem praesentium nihil."
        />
        <Card
          image={"/card/img-servico.jpeg"}
          title="Titulo de serviço"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
              et perferendis eaque, exercitationem praesentium nihil."
        />
        <Card
          image={"/card/img-servico.jpeg"}
          title="Titulo de serviço"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
              et perferendis eaque, exercitationem praesentium nihil."
        />
     
      </div>
    </div>
  );
}
