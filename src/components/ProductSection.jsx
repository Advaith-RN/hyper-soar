import {useState} from 'react'
import { ProductItem } from '../components';
import { Link } from 'react-router-dom';

const ProductSection = () => {
  
  const [info, setInfo] = useState("");
  const [img_info, setImgInfo] = useState('../products/Empty.png');

  function handleInfo(val){
    switch(val){
        case 1:
            setInfo("Our flagship drone, designed to operate in the harshest environments.");
            setImgInfo('../products/droneA.png');
            break;
        case 2:
            setInfo("This drone prioritizes camera quality, and ensures that your next footage is the best one yet.");
            setImgInfo('../products/droneB.png');
            break;
        case 3:
            setInfo("Let's just say, this Icarus will not fall from the sky.");
            setImgInfo('../products/droneC.png');
            break;
        default:
            setImgInfo("../products/Empty.png");
            break;
    }
  }

  function clear(){
    setInfo("");
    setImgInfo('../products/Empty.png');
  }


  return (
   
        <div className='h-screen max-w-screen' id='products'>
            <div className='w-full flex col'>
                <div className='w-[90%] md:w-[50%] pl-[5%] pt-[5%] md:pt-[2%]'>  
                    <h1 className='font-bold font-integral text-4xl md:text-7xl mb-6'>
                        Products
                    </h1>
                        <Link to='/nike'>
                            <ProductItem sl_no='01' name="Nike" handleInfo={()=>handleInfo(1)} clear={clear}/>
                        </Link>
                        <Link to='/cyclops'>
                            <ProductItem sl_no='02' name="Cyclops" handleInfo={()=>handleInfo(2)} clear={clear}/>
                        </Link>
                        <Link to='/icarus'>
                            <ProductItem sl_no='03' name="Icarus" handleInfo={()=>handleInfo(3)} clear={clear}/>        
                        </Link>            
                </div>
                <div className='w-[50%] invisible lg:visible mt-[10%] font-medium'>  
                    <div className='w-full ml-8 h-[25%] items-center flex flex-col'>
                        <p className='text-right text-2xl pr-[20%]'>{info}</p>
                        <img src={img_info} alt="drone" className='w-[90%] mt-[-10%]'/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductSection