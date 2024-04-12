import CardPartnerShip from "./components/cardPartnership";
import Title from "./components/title";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import Card from "./components/card";

export default function Partnerships() {
  return (
    <div className="bg-white p-5 sm:p-10 w-full mb-10">
      <div className="flex flex-col  lg:flex-row lg:ml-10 lg:text-start mt-10 w-full">
        <div className="w-full">
          <Title title="PARCERIAS" />

          <div className="flex hidden lg:block  items-center justify-start mt-5 bg-white w-full h-[200px]">
            <Carousel
              // autoPlay
              // infiniteLoop
              emulateTouch
              showIndicators
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              interval={3000}
              className="w-full"
            >
              <div className="flex mb-2">
                <CardPartnerShip
                imgHeight="200"
                imgWidth="200"
                bgColor="black"
                  isMobile={false}
                  title="Câmara de Comércio Argentino Brasileira"
                  description="A Câmara de Comércio Argentino-Brasileira da República Argentina é uma Associação Civil sem fins lucrativos."
                  img="/partnerships/LogoCAMBRASBlanco.png"
                  about="teste"
                />

                <CardPartnerShip
                imgHeight="1200"
                imgWidth="1200"
                bgColor="black"
                  isMobile={false}
                  title="Câmara Americana - Brasil"
                  description=" uma comunidade de empresas que busca melhorar o ambiente de negócios no Brasil. Nossos associados estão em 15 cidades pelo Brasil e representam 33% do PIB nacional."
                  img="/partnerships/amcham2.png"
                  about="teste"
                />
              </div>

              <div className="flex mb-2">
                <CardPartnerShip
                imgHeight="300"
                imgWidth="200"
                bgColor="white"
                  isMobile={false}
                  title="Câmara México Brasil"
                  description="A Câmara de Comércio México Brasil é uma Associação Civil, dedicada a estabelecer relações comerciais bilaterais entre empresas mexicanas e brasileiras."
                  img="/partnerships/camebra.jpg"
                  about="teste"
                />

                <CardPartnerShip
                imgHeight="300"
                imgWidth="200"
                bgColor="white"
                  isMobile={false}
                  title="Asociación Mexicana de Agentes de Carga"
                  description="Associação Mexicana de Agentes de Cargas com mais de 380 associados no país, fundada em 13 de maio de 1986."
                  img="/partnerships/amacarga.png"
                  about="teste"
                />
              </div>
              <div className="flex mb-2">
                <CardPartnerShip
                imgHeight="300"
                imgWidth="200"
                bgColor="white"
                  isMobile={false}
                  title="Dutch Brazilian Chamber Of Commerce"
                  description="A Dutcham promove networking de qualidade entre profissionais de negócios para impulsionar o sucesso das empresas holandesas no Brasil."
                  img="/partnerships/novo_dutcham.jpg"
                  about="teste"
                />
              </div>
            </Carousel>

            {/* MOBILE */}
          </div>
          <div className="flex block lg:hidden  items-center justify-start mt-5 bg-white w-full h-[200px]">
            <Carousel
              // autoPlay
              // infiniteLoop
              emulateTouch
              showIndicators
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              interval={3000}
              className="w-full"
            >
              <div className="flex mb-2">
                <CardPartnerShip
                imgHeight="300"
                imgWidth="200"
                bgColor="black"
                  isMobile={true}
                  title="Câmara de Comércio Argentino Brasileira"
                  description="A Câmara de Comércio Argentino-Brasileira da República Argentina é uma Associação Civil sem fins lucrativos."
                  img="/partnerships/LogoCAMBRASBlanco.png"
                  about="teste"
                />
              </div>
              <div>
              <CardPartnerShip
              imgHeight="300"
              imgWidth="200"
              bgColor="white"
                isMobile={true}
                title="Câmara Americana - Brasil"
                description=" uma comunidade de empresas que busca melhorar o ambiente de negócios no Brasil. Nossos associados estão em 15 cidades pelo Brasil e representam 33% do PIB nacional."
                img="/partnerships/amcham2.png"
                about="teste"
              />
</div>
              <div className="flex mb-2">
                <CardPartnerShip
                imgHeight="300"
                imgWidth="200"
                bgColor="white"
                  isMobile={true}
                  title="Câmara México Brasil"
                  description="A Câmara de Comércio México Brasil é uma Associação Civil, dedicada a estabelecer relações comerciais bilaterais entre empresas mexicanas e brasileiras."
                  img="/partnerships/camebra.jpg"
                  about="teste"
                />
                </div>
                <div>
                <CardPartnerShip
                imgHeight="300"
                imgWidth="200"
                bgColor="white"
                  isMobile={true}
                  title="Asociación Mexicana de Agentes de Carga"
                  description="Associação Mexicana de Agentes de Cargas com mais de 380 associados no país, fundada em 13 de maio de 1986."
                  img="/partnerships/amacarga.png"
                  about="teste"
                />
              </div>
              <div className="flex mb-2">
                <CardPartnerShip
                imgHeight="300"
                imgWidth="200"
                bgColor="white"
                  isMobile={true}
                  title="Dutch Brazilian Chamber Of Commerce"
                  description="A Dutcham promove networking de qualidade entre profissionais de negócios para impulsionar o sucesso das empresas holandesas no Brasil."
                  img="/partnerships/novo_dutcham.jpg"
                  about="teste"
                />
              </div>
            </Carousel>

            {/* MOBILE */}
          </div>
        </div>
      </div>
    </div>
  );
}
