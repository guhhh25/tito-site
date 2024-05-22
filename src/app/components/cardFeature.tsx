export default function CardFeature(props: any) {
  const { text, title, icon } = props

  return (
    <div className="p-2">
      <div
        className="flex relative px-5 justify-center items-center block max-w-md mx-auto overflow-hidden bg-white border border-gray-400 rounded shadow-sm group"
        aria-label="View item"
        title="View item"
      >
        <div>{icon}</div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] duration-300 origin-left transform scale-x-0 bg-tito-color group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 left-0 w-[1.5px] h-full duration-300 origin-bottom transform scale-y-0 bg-tito-color group-hover:scale-y-100"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] duration-300 origin-right transform scale-x-0 bg-tito-color group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 right-0 w-[1.5px] h-full duration-300 origin-top transform scale-y-0 bg-tito-color group-hover:scale-y-100"></div>
        <div className="flex items-center justify-between p-3">
          <div className="pr-1">
            <h6 className="mb-2 font-semibold leading-1 tracking-wider text-gray-900">
              {title}
            </h6>
            <p className="flex justify-center text-sm text-gray-900 text-sm h-[90px] ">
              {text}
            </p>
          </div>
          <div className="flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  )
}
