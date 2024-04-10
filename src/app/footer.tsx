import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full h-[100px] bg-tito-color border-t border-t-2 border-black p-10">
      <div className="flex w-full h-full items-center">
        <div>
          <Image
            src={"/logo-tito-nobg.png"}
            width={130}
            height={100}
            alt="img"
          />
        </div>
        <div className="flex w-full h-full text-white ml-3">
          @Copyright Tito Smart Logistcs
        </div>
        <div className="flex w-[15%] justify-between">
        <div>
          <FaLinkedin className="text-white flex w-full h-full text-white mr-3 cursor-pointer" />
        </div>
        <div>
          <FaInstagramSquare className="text-white flex w-full h-full text-white mr-3 cursor-pointer"  />
        </div>
        <div>
          <FaSquareTwitter className="text-white flex w-full h-full text-white mr-3 cursor-pointer" />
        </div>
        </div>
      </div>
    </div>
  );
}
