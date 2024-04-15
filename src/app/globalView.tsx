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
    className="mb-10 h-[500px]"
  >
    
    <div style={{ position: "relative" }}>
      <ParallaxProvider>
    <Parallax speed={-100} >
          <Image
            src="/carrousel/rodoviario_tito.jpg"
            alt="Image 1"
            width={900}
            className="h-full h-[620px] lg:max-h-[602px] filter brightness-50"
            height={900}
          />
     </Parallax>
     </ParallaxProvider>
      <div 
        style={{
          position: "absolute",
          top:0
          
        }}
        className="flex flex-col w-[100%] text-center items-center justify-center h-full max-h-[650px]"
      >
        <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold max-w-[80%]">
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
    <Parallax speed={-300} >
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
