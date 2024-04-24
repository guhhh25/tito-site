import { IoLocationOutline } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { CiLocationArrow1 } from 'react-icons/ci'
import { Fade } from 'react-awesome-reveal'

interface UnitItemsProps {
  adress: string
  street: string
  phone: string
  country: any
}

export default function UnitItems(props: UnitItemsProps) {
  const { adress, street, phone, country } = props

  return (
    <Fade>
      <div className="relative flex flex-col gap-4 text-gray-700 border-2 border-gray-400 text-sm 2xl:text-lg  bg-gray-200 p-5 rounded-sm h-fit w-[400px] sm:w-[550px]  2xl:w-[720px] mx-5">
        {country as any}

        <p className="flex items-center gap-2 font-semibold">
          <CiLocationArrow1 /> {adress}
        </p>

        <p className="flex items-center gap-2">
          <IoLocationOutline /> {street}
        </p>
        <p className="flex items-center gap-2">
          <FiPhone /> {phone}
        </p>
      </div>
    </Fade>
  )
}
