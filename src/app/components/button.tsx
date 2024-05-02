import { TiArrowRightThick } from 'react-icons/ti'
interface buttonProps {
  text: string
}

export default function Button(props: buttonProps) {
  const { text } = props

  return (
    <button className="flex justify-center transition ease duration-1 shadow-[4px_4px_0px_1px_#CBD5E0] hover:shadow-[12px_12px_0px_1px_#CBD5E0] items-center bg-blue-500 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded mt-5 mb-5">
      {text}
      <TiArrowRightThick className="ml-2" />
    </button>
  )
}
