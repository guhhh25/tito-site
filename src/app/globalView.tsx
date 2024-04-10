import Image from "next/image";

export default function GlobalView() {
  return (
    <div className="bg-white p-10 w-full mb-10">
    <div className="flex flex-col  lg:flex-row lg:ml-10 lg:text-start mt-10 w-full">
      <div className="w-full">
        <p className="tracking-wider font-bold">GLOBAL VIEW</p>
        <p className="tracking-wider text-xl mt-5 w-[100%]">
          Tenha uma visão integrada de todos os seus processos aduaneiros em
          tempo real e em um só lugar: essa é a principal vantagem do
          GlobalView, o portal que permite o gerenciamento completo de dados
          para a sua empresa. Com essa ferramenta, os gestores podem monitorar
          os principais indicadores de desempenho e, ainda, tem acesso às
          informações necessárias para uma tomada de decisão mais precisa.
        </p>
      </div>
      <div className="w-full">
        <Image src={"/mapa2.png"} height={200} width={500} alt="map" />
      </div>
    </div>
    </div>
  );
}
