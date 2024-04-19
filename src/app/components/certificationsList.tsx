interface CertificationListProps {
  text: string;
}

export default function CertificationsList(props: CertificationListProps) {
  const { text } = props;
  return (
    <ul className="px-5 py-5 ">
      <li className="relative bg-tito-color text-white shadow-xl rounded-lg p-6 border-b-4 border-transparent transition-colors duration-500  hover:border-blue-300">
        {text}
      </li>
    </ul>
  );
}
