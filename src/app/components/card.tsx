import Image from 'next/image'
import { GoArrowRight } from 'react-icons/go'

interface cardProps {
  image: any
  title: string
  text: string
  href: string
}

export default function Card(props: cardProps) {
  const { image, title, text, href } = props

  return (
    <a
      href={href}
      className="card cursor-pointer flex w-full mt-5 lg:mt-0  max-w-[500px]  2xl:max-w-[450px] w-full rounded-md overflow-hiddenborder border-gray-400 rounded shadow-lg group m-5"
    >
      <div className="w-full h-full relative">
        <Image
          src={image}
          className="cardPhoto w-full max-h-[250px] object-cover"
          width={2000}
          height={2000}
          alt="service"
        />

        <div className="px-5 pt-5 h-[270px] mb-5">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="cardLine bg-blue-400 w-[80px] h-[8px] rounded-full mb-5"></div>
          <p className="text-gray-700 text-base ">{text}</p>
          <button className="cardBtn bg-blue-400 w-[60px] h-2 absolute  mb-5 -bottom-5 right-0">
            <GoArrowRight className="w-[50px] h-[30px]" />
          </button>
        </div>
      </div>
    </a>
  )
}
