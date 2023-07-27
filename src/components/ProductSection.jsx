import {useState} from 'react'
import { ProductItem } from '../components';

const ProductSection = () => {
  
  const [info, setInfo] = useState("");
  const [img_info, setImgInfo] = useState('./src/assets/products/Empty.png');

  function handleInfo(val){
    switch(val){
        case 1:
            setInfo("Our line of top class drones, designed to operate in the harshest environments.");
            setImgInfo('./src/assets/products/droneA.png');
            break;
        case 2:
            setInfo("These drones prioritize camera quality, and ensure your next footage is the best one yet.");
            setImgInfo('./src/assets/products/droneB.png');
            break;
        case 3:
            setInfo("Moderate prices do not mean moderate performance for our Series C budget drones");
            setImgInfo('./src/assets/products/droneC.png');
            break;
        case 4:
            setInfo("Accessories for your drones, including batteries, propellers, and more.");
            setImgInfo('./src/assets/products/accessories.png');
            break;
        default:
            setInfo("test");
            break;
    }
  }

  function clear(){
    setInfo("");
    setImgInfo('./src/assets/products/Empty.png');
  }


  return (
    <div className='h-screen max-w-screen' id='products'>
        <div className='w-full flex col'>
            <div className='w-[90%] md:w-[50%] pl-[5%] pt-[5%] md:pt-[2%]'>  
                <h1 className='font-bold font-integral text-6xl md:text-7xl mb-6'>
                    Products
                </h1>
                <ProductItem sl_no='01' name="Series A" handleInfo={()=>handleInfo(1)} clear={clear}/>
                <ProductItem sl_no='02' name="Series B" handleInfo={()=>handleInfo(2)} clear={clear}/>
                <ProductItem sl_no='03' name="Series C" handleInfo={()=>handleInfo(3)} clear={clear}/>
                <ProductItem sl_no='04' name="Accessories" handleInfo={()=>handleInfo(4)} clear={clear}/>
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