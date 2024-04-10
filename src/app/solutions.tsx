import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Card from "./components/card";

export default function Solutions() {
  return (
    <div className=" mt-10 mb-10 p-10  lg:p-20">
      <p className="tracking-wider font-bold">SOLUÇÕES</p>

      <div className="flex flex-col sm:flex-row sm:justify-between 2xl:justify-center flex-wrap">
        <Card
          image={"/img-servico.jpeg"}
          title="Titulo de serviço"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
              et perferendis eaque, exercitationem praesentium nihil."
        />
        <Card
          image={"/img-servico.jpeg"}
          title="Titulo de serviço"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
              et perferendis eaque, exercitationem praesentium nihil."
        />
        <Card
          image={"/img-servico.jpeg"}
          title="Titulo de serviço"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
              et perferendis eaque, exercitationem praesentium nihil."
        />
          <Card
          image={"/img-servico.jpeg"}
          title="Titulo de serviço"
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
              et perferendis eaque, exercitationem praesentium nihil."
        />
          <Card
          image={"/img-servico.jpeg"}
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
