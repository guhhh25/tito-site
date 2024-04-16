import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Title from "./components/title";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function GlobalView() {
  return (
    <Carousel
    //autoPlay
    //infiniteLoop
    showArrows={false}
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    interval={3000}
    className=" h-[600px] lg:max-h-[622px]"
  >
    
    <div style={{ position: "relative" }}>
      <ParallaxProvider>
    <Parallax speed={-40} >
          <Image
            src="/carrousel/truck-teste.jpg"
            alt="Image 1"
            width={900}
            className="h-[500px]  lg:max-h-[650px] filter brightness-50"
            height={900}
          />
     </Parallax>
     </ParallaxProvider>
     <div className="absolute top-1/2 left-1/3 px-5 transform -translate-x-1/3 -translate-y-1/2 text-start text-white">
        <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold max-w-[100%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          orci neque, pulvinar at interdum ac, pellentesque ac
        </p>
        <button className="flex justify-center text-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-[200px] mt-5">
          Global View
        </button>
      </div>
    </div>

    <div>
    <ParallaxProvider>
    <Parallax speed={-100} >
      <Image
        src="/carrousel/img-provisoria2.jpg"
        alt="Image 2"
        width={900}
        className="h-[572px]  filter brightness-50"
        height={900}
      />
   </Parallax>
        </ParallaxProvider>
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 40,
        }}
        className="flex flex-col w-[50%]"
      >
        <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          orci neque, pulvinar at interdum ac, pellentesque ac
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-[200px] mt-5">
          Veja mais sobre
        </button>
      </div>
    </div>
   
 
  </Carousel>
  );
}
