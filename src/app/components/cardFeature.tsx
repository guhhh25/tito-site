export default function CardFeature(props:any){

    const {text, title, icon} = props

    return (
        <div className="flex  w-[400px]  h-[180px] border-4 border-gray-300 m-4" >
            <div className="flex items-center h-full px-4 text-center justify-center w-[150px]">
                {icon}
            </div>

            <div className="px-5  items-center  w-full">
                <p className="text-bold font-bold text-xl mt-5 text-gray-700">{title}</p>

                <p className=" text-xl mt-5 text-gray-500  ">{text}</p>
            </div>
        </div>
    )
}