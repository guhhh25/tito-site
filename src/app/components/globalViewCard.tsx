import Image from 'next/image'
import Title from './title'

interface GlobalViewCardProps {
  image: string
  title: string
  content: string
}

export default function GlobalViewCard(props: GlobalViewCardProps) {
  const { image, title, content } = props

  return (
    <div className="flex  justify-center items-center px-10 lg:px-20 py-10  ">
      <div className=" flex flex-col xl:max-w-[1720px] xl:h-[360px]  justify-center items-center  w-full rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white xl:flex-row">
        <Image
          height={1000}
          width={1000}
          alt="globalView"
          className="  xl:max-w-[700px]  rounded-t-lg  xl:h-[360px] 2xl:w-[790px] md:!rounded-none md:!rounded-s-lg"
          src={image}
        />

        <div className="flex flex-col text-black  text-start  justify-start py-10 px-10">
          <Title title={title} />
          <p className="mb-4 text-black mt-5 ">{content}</p>
          <a
            target="_blank"
            href="https://gv2.tito.com.br/"
            className="underline text-black hover:text-blue-500"
          >
            Visitar Global View
          </a>
        </div>
      </div>
    </div>
  )
}
