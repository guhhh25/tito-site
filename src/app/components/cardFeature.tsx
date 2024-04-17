import Image from "next/image";

export default function CardFeature(props: any) {
  const { text, title, icon } = props;

  return (
    <div className="p-5">
      <a
        className="flex relative px-5 justify-center items-center block max-w-md mx-auto overflow-hidden bg-white border border-gray-400 rounded shadow-sm group"
        href="#"
        aria-label="View item"
        title="View item"
      >
        <div>
        {icon}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[3px] duration-300 origin-left transform scale-x-0 bg-tito-color group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-tito-color group-hover:scale-y-100"></div>
        <div className="absolute top-0 left-0 w-full h-[3px] duration-300 origin-right transform scale-x-0 bg-tito-color group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-tito-color group-hover:scale-y-100"></div>
        <div className="flex items-center justify-between p-5">
          <div className="pr-4">
            <h6 className="mb-2 font-semibold leading-8 tracking-wider text-gray-900">
              {title}
            </h6>
            <p className="text-sm text-gray-900 text-sm">{text}</p>
          </div>
          <div className="flex items-center justify-center">
          
          </div>
        </div>
      </a>
    </div>
  );
}
