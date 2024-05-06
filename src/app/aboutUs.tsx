import Image from 'next/image'
import Title from './components/title'
import Button from './components/button'

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-col xl:flex-row 2xl:justify-center  items-center 2xl:items-center text-start justify-start lg:p-20 ">
        <div className="2xl:max-w-[1110px] px-8">
          <Title title="SOBRE A TITO SMART MODAL LOGISTICS" />
          <p className="text-gray-800  w-full text-4xl mt-4 mb-4">
            Experiência e atualização para oferecer ao mercado as melhores
            soluções logísticas.
          </p>
          <p className="text-xl  max-w-[1100px] w-full ">
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

          <div className="flex gap-3">
            <a href="/ourstory">
              <Button text="Saiba mais sobre" />
            </a>
            <a
              href="https://titoonline.com/pt/pdf/normas_conduta_ptb.pdf"
              target="_blank"
            >
              <Button text="Codigo de conduta" />
            </a>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="truck"
            className="hidden xl:block border-1 rounded-lg px-8 lg:px-0  w-full"
            src="/truck/truck.jpg"
            width={600}
            height={200}
          />
        </div>
      </div>
    </>
  )
}
