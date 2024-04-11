import Image from "next/image";

interface cardPartnetShipProps {
  title: string;
  description: string;
  about: string;
  img: string;
  isMobile: boolean;
}

export default function CardPartnerShip(props: cardPartnetShipProps) {
  const { title, description, about, img, isMobile } = props;

  return (
    <div className="relative mx-8 flex bg-clip-border rounded-xl bg-white text-gray-700 h-[200px] shadow-xl  lg:max-w-[45rem] flex-row">
      <div className=" relative w-2/5 m-0 overflow-hidden text-gray-700 bg-tito-color rounded-r-none bg-clip-border rounded-xl shrink-0">
        <Image
          src={img}
          alt="card-image"
          className="w-[400px] h-[200px] "
          width={500}
          height={200}
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
