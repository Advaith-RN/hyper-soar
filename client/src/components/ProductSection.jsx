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
   
        <div className='h-[calc(100svh-4.5rem)] md:h-screen w-full flex items-center justify-center px-[5%]' id='products'>
            <div className='h-full w-full flex justify-center mt-[5rem] md:mt-2 pt-10'>
                <div className='w-[100%] md:w-[50%] flex flex-col gap-4'>  
                    <h1 className='font-bold font-integral text-4xl md:text-7xl'>
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
                <div className='h-full w-[50%] invisible lg:visible flex items-center justify-center font-medium'>  
                    <div className='h-[80%] w-full flex items-center justify-end flex-col'>
                        <p className='h-[4rem] text-right text-2xl px-[1rem]'>{info}</p>
                        <img src={img_info} alt="drone" className='h-[30rem] w-[100%] object-contain'/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductSection