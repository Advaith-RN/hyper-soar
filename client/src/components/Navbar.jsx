import React, {useState} from 'react'
import { logo } from '../assets';
import { Link } from 'react-router-dom'
import { Link as ScrollLink} from "react-scroll";

const Navbar = ({isLoggedIn}) => {

    // PAGE RELOAD WHEN NAVBAR LOGO IS CLICKED
    const pageReload = () =>{
        window.location.reload();
    }

    // FOR TOGGLING THE MENU TAB
    const [NavMenu, setNavMenu] = useState(false)
  
    const handleClick = () =>{
        setNavMenu(!NavMenu) 
    }


    return (
        <nav id="navbar">
            <div className="fixed md:relative w-full h-[4.5rem] md:h-[6rem] bg-[#fff] flex flex-row items-center justify-between px-3 md:px-10 z-[20]">
                <Link onClick={pageReload} to='/' className=''>
                    <img
                    src={logo}
                    className="w-20 object-contain"
                    alt="Logo"
                    />
                </Link>
                
                <ul className="hidden w-full md:flex gap-4 md:gap-12 items-center justify-end">
                    <ScrollLink to='products' smooth="true"><li className="min-w-[7rem] flex items-center justify-center cursor-pointer text-xs md:text-lg transition-all hover:font-medium">PRODUCTS</li></ScrollLink>
                    <ScrollLink to='about_us' smooth="true"><li className="min-w-[7rem] flex items-center justify-center cursor-pointer text-xs md:text-lg transition-all hover:font-medium">ABOUT US</li></ScrollLink>
                    {!isLoggedIn && <Link to='/login' smooth="true"><li className="min-w-[7rem] flex items-center justify-center cursor-pointer text-xs md:text-lg transition-all border-2 border-dark-gray p-2 px-4 xl:px-7 rounded-full hover:bg-dark-gray hover:text-[#fff]">LOG IN</li></Link>}
                </ul>
            
            
                {/* MOBILE VIEW*/}
                
                <span onClick={handleClick} className='block md:hidden cursor-pointer transition delay-100 z-[20]'>
                    <i className={`fa-solid ${!NavMenu ? 'fa-bars' : 'fa-times'} text-xl`}></i>
                </span>

                {/* MOBILE VIEW DROPDOWN ITEMS */}
                <div className={`${NavMenu ? 'absolute right-0 md:hidden' : 'absolute md:hidden right-[-15rem]'}  w-[15rem] h-[100svh] top-0 pt-[4.5rem] p-3 flex flex-col justify-start gap-4 bg-[#f8f8f8] transition-all`}>
                    <ScrollLink onClick={handleClick} to='products' smooth="true" className='bg-[#f5f5f5] active:bg-gray-300 text-gray-600 w-full h-[2.5rem] font-bold rounded-md grid place-content-center'>
                        <span>PRODUCTS</span>
                    </ScrollLink>
                    <ScrollLink onClick={handleClick} to='about_us' smooth="true" className='bg-[#f5f5f5] active:bg-gray-300 text-gray-600 w-full h-[2.5rem] font-bold rounded-md grid place-content-center'>
                        <span>ABOUT US</span>
                    </ScrollLink>
                    <span className='text-[#fff] bg-dark-gray p-2 rounded-full'>
                        <Link onClick={handleClick} to='/login' smooth="true" className='active:bg-gray-300 font-bold grid place-content-center'>LOG IN</Link>
                    </span>
                </div>
            </div>
        </nav>
        );
}

export default Navbar