import Image from "next/image";

interface cardProps {
  image: any;
  title: string;
  text: string;
}

export default function Card(props: cardProps) {
  const { image, title, text } = props;

  return (
    <div className="flex w-full sm:max-w-[350px] max-h-[500px]  2xl:max-w-[500px] rounded-md overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 2xl:m-5">
      <div className="px-1 py-4">
        <Image
          src={image}
          className="w-full max-h-[250px] object-cover"
          width={5000}
          height={5000}
          alt="service"
        />
        <div className="px-5 pt-5">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{text}</p>
          <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
}
