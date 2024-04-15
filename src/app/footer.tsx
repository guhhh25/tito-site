import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t bg-tito-color border-black p-4 flex items-center justify-between h-[100px]">
      <div className="flex w-full h-full items-center">
        <div>
          <Image
            src={"/logosTito/logo-tito-nobg.png"}
            width={130}
            height={100}
            alt="img"
          />
        </div>
        <div className="flex w-full h-full items-center text-white ml-3">
          @Copyright Tito Smart Logistcs
        </div>
        <div className="flex w-[15%] justify-between">
          <div>
            <FaLinkedin className="text-white flex w-full h-full text-white mr-3 cursor-pointer hover:text-blue-700" />
          </div>
          <div>
            <FaInstagramSquare className="text-white flex w-full h-full text-white mr-3 cursor-pointer hover:text-blue-700" />
          </div>
          <div>
            <FaSquareTwitter className="text-white flex w-full h-full text-white mr-3 cursor-pointer hover:text-blue-700" />
          </div>
        </div>
      </div>
    </footer>
  );
}
