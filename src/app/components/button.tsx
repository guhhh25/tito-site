import { promises } from 'dns'
import { TiArrowRightThick } from 'react-icons/ti'

interface buttonProps {
  text: string
  onclick: (e: any) => any
}

export default function Button(props: buttonProps) {
  const { text, onclick } = props

  return (
    <button
      type="submit"
      onClick={onclick}
      className="flex justify-center transition ease duration-1 shadow-[4px_4px_0px_1px_#CBD5E0] hover:shadow-[8px_8px_0px_1px_#CBD5E0] items-center bg-blue-500 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded mt-5 mb-5"
    >
      {text}
      <TiArrowRightThick className="ml-2" />
    </button>
  )
}
