interface titleProps {
  title: string;
}

export default function Title(props: titleProps) {
  const { title } = props;
  return <p className="tracking-wider font-bold">{title}</p>;
}
