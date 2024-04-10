import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Solutions() {
  return (
    <div className=" mt-10 mb-10 p-20">
      <p className="tracking-wider font-bold">SOLUÇÕES</p>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:max-w-[350px] rounded-md overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
          <div className="px-1 py-4">
            <Image
              src="/img-servico.jpeg"
              className="w-full h-full object-cover "
              width={1000}
              height={1000}
              alt="service"
            />
            <div className="px-5 pt-5">
              <div className="font-bold text-xl mb-2">Titulo de Serviço</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5">
                Saiba mais
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-[350px] rounded-md overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
          <div className="px-1 py-4">
            <Image
              src="/img-servico.jpeg"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
              alt="service"
            />
            <div className="px-5 pt-5">
              <div className="font-bold text-xl mb-2">Titulo de Serviço</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5">
                Saiba mais
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-[350px]  rounded-md overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
          <div className="px-1 py-4">
            <Image
              src="/img-servico.jpeg"
              className="w-full h-full object-cover"
              width={1200}
              height={1000}
              alt="service"
            />
            <div className="px-5 pt-5">
              <div className="font-bold text-xl mb-2">Titulo de Serviço</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
