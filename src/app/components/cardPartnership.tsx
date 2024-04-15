import Image from "next/image";

interface cardPartnetShipProps {
  title: string;
  description: string;
  about: string;
  img: string;
  isMobile: boolean;
  bgColor: string;
  imgWidth: string;
  imgHeight: string;
}

export default function CardPartnerShip(props: cardPartnetShipProps) {
  const {
    title,
    description,
    about,
    img,
    isMobile,
    bgColor,
    imgWidth,
    imgHeight,
  } = props;

  return (
    <div className=" mx-8   bg-clip-border rounded-xl bg-white text-gray-700 h-[400px] shadow-lg  lg:max-w-[30rem] flex-row">
      <div
        className={` flex   w-full h-[150px] m-0 overflow-hidden text-gray-700 bg-${bgColor} rounded-r-none bg-clip-border rounded-xl shrink-0`}
      >
        <Image
          src={img}
          alt="card-image"
          className={`w-[${imgWidth}px] h-${imgHeight}px] `}
          width={1000}
          height={1000}
        />
      </div>
      <div className="p-6">
        <h4 className="block mb-2 font-sans text-xl lg:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h4>

        {isMobile === false ? (
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
            Saiba mais...
          </button>
        )}
      </div>
    </div>
  );
}
