interface PathProps {
  link1: string;
  link2: string;
  namePath1: string;
  namePath2: string;
}

export default function Path(props: PathProps) {
  const { link1, link2, namePath1, namePath2 } = props;

  return (
    <div>
      <p className="absolute left-10 top-[110px] tracking-wider font-bold text-2xl text-gray-800">
        <a
          className="transiction ease-in-out delay-150 duration-100 hover:text-blue-500"
          href={link1}
        >
          {" "}
          {namePath1}{" "}
        </a>{" "}
        {">"}{" "}
        <a
          className="transiction ease-in-out delay-150 duration-100 hover:text-blue-500"
          href={link2}
        >
          {" "}
          {namePath2}{" "}
        </a>
      </p>
    </div>
  );
}