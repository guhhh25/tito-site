interface titleProps {
  title: string;
}

export default function Title(props: titleProps) {
  const { title } = props;
  return <p className="tracking-wider text-xl  font-bold">{title}</p>;
}
