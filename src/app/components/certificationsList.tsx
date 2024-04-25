interface CertificationListProps {
  text: string
}

export default function CertificationsList(props: CertificationListProps) {
  const { text } = props
  return (
    <ul className="px-5 py-5 ">
      <li className="relative bg-tito-color text-white shadow-lg rounded-lg p-6 border-4 border-transparent transition-colors duration-500  hover:border-blue-600">
        {text}
      </li>
    </ul>
  )
}
