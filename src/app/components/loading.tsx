import { FaPlane } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi';


const Loading = () => {
  return (
    <div className="plane-container">
    <GiEarthAmerica className='w-[100px] h-[100px] text-blue-500'/>
    <FaPlane className="plane-icon" />
  </div>
  );
};

export default Loading;