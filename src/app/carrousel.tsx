import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function Carrousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={3000}
      className="mb-10"
    >
      <div style={{ position: "relative" }}>
       
        <Image
          src="/carrousel/img-provisoria-4.jpg"
          alt="Image 1"
          width={900}
          className="h-[572px]  filter brightness-50"
          height={900}
        />

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
      <div>
        <Image
          src="/carrousel/img-provisoria2.jpg"
          alt="Image 2"
          width={900}
          className="h-[572px]  filter brightness-50"
          height={900}
        />
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
      <div>
        <Image
          src="/carrousel/img-provisoria5.jpg"
          alt="Image 3"
          width={900}
          className="h-[572px]  filter brightness-50"
          height={900}
        />
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
