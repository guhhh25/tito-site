import { IoIosArrowUp } from "react-icons/io";
import {backToTop} from './../Utils/backToTopBtn'
export default function BackToTopBtn(props: any) {

    const {hidden} = props

    return (
        <div onClick={() => backToTop()} id="backToTopBtn" className={`transition-opacity duration-500 ease-in-out fixed bottom-5 right-5 z-50 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
            <div className=" flex text-center items-center justify-center  bg-blue-500 w-[50px] h-[50px] rounded-full cursor-pointer">
                <IoIosArrowUp className="text-white w-6 h-6" />
            </div>
        </div>
    )
}