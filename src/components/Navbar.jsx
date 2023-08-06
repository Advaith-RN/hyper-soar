import React from 'react'
import { logo } from '../assets';
import { Link } from 'react-router-dom'
import { Link as ScrollLink} from "react-scroll";

const Navbar = ({isLoggedIn}) => {
    return (
        <nav id="navbar">
            <div className="w-full flex flex-row justify-between mt-[1%]">
                <Link to='/'>
                    <img
                    src={logo}
                    className="ml-2 md:ml-10 w-20 object-contain"
                    alt="Logo"
                    />
                </Link>
            <ul className="flex flex-row gap-4 md:gap-12 mr-12 items-center">
                {!isLoggedIn && <li className="cursor-pointer text-xs md:text-lg transition-all hover:font-bold"><Link to='/login' smooth="true">LOG IN</Link></li>}
                <li className="cursor-pointer text-xs md:text-lg transition-all hover:font-bold"><ScrollLink to='products' smooth="true">PRODUCTS</ScrollLink></li>
                <li className="cursor-pointer text-xs md:text-lg transition-all hover:font-bold"><ScrollLink to='about_us' smooth="true">ABOUT US</ScrollLink></li>
            </ul>
        </div>
        </nav>
        );
}

export default Navbar