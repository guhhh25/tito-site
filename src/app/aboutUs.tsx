import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Title from "./components/title";

export default function AboutUs() {
  return (
   
      <div className="flex flex-col lg:flex-row items-start items-center lg:justify-around 2xl:justify-center lg:items-center w-[100%] p-10">
        <div className="lg:ml-10 lg:text-start  px-5 2xl:px-8 lg:w-1/2">
         <Title title="SOBRE A TITO SMART MODAL LOGISTICS"/>
          <p className="font-black     text-4xl mt-4 mb-4">
            Experiência e atualização para oferecer ao mercado as melhores
            soluções logísticas.
          </p>
          <p className="text-xl">
            A experiência da Tito em inúmeros casos demonstra que a mudança de
            processos traz resultados maiores e mais consistentes para o Opex, e
            na maioria das vezes impactam positivamente na qualidade. Os prazos
            são reduzidos, o tempo gasto pelos profissionais na gestão é
            diminuído, fretes caem não pela negociação, mas também pela gestão.
            Essa é a nova proposta da Tito para o mercado, com o conceito de
            Smart Modal Logistics: Combinar 84 anos de experiência acumulada sob
            a mesma gestão, em diferentes disciplinas, englobando operações
            logísticas em todos os modais, gestão aduaneira, além de ferramentas
            de TI para rastreabilidade e análise de processos. Uma proposição
            que vem ao encontro do que o mercado busca.
          </p>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5">
            Veja mais sobre
          </button>
        </div>

        <div className="w-[1/2] mt-5 lg:mt-0">
          <Image
            alt="truck"
            className="border-1 rounded-lg"
            src="/truck/truck.jpg"
            width={700}
            height={100}
          />
        </div>
      </div>
 
  );
}
