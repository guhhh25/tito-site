import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Title from "./components/title";

export default function AboutUs() {
  return (
    <div className="flex flex-col lg:flex-row 2xl:justify-center  items-center 2xl:items-center text-start justify-start lg:p-20" >
      <div className="flex flex-col justify-center items-start 2xl:max-w-[1200px] px-8 lg:px-10">
        <Title title="SOBRE A TITO SMART MODAL LOGISTICS" />
        <p className="text-gray-800  lg:max-w-[1100px]   w-full text-4xl mt-4 mb-4">
          Experiência e atualização para oferecer ao mercado as melhores
          soluções logísticas.
        </p>
        <p className="text-xl lg:max-w-[1100px] w-full ">
          A experiência da Tito em inúmeros casos demonstra que a mudança de
          processos traz resultados maiores e mais consistentes para o Opex, e
          na maioria das vezes impactam positivamente na qualidade. Os prazos
          são reduzidos, o tempo gasto pelos profissionais na gestão é
          diminuído, fretes caem não pela negociação, mas também pela gestão.
          Essa é a nova proposta da Tito para o mercado, com o conceito de Smart
          Modal Logistics: Combinar 84 anos de experiência acumulada sob a mesma
          gestão, em diferentes disciplinas, englobando operações logísticas em
          todos os modais, gestão aduaneira, além de ferramentas de TI para
          rastreabilidade e análise de processos. Uma proposição que vem ao
          encontro do que o mercado busca.
        </p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5">
          Veja mais sobre
        </button>
      </div>

      <div className="">
        <Image
          alt="truck"
          className="border-1 rounded-lg px-8 lg:px-0"
          src="/truck/truck.jpg"
          width={600}
          height={200}
        />
      </div>
    </div>
  );
}
