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
                    className="pl-2 md:pl-8 h-128 object-contain"
                    alt="Logo"
                    />
                </Link>
            <ul className="flex flex-row gap-12 mr-12 items-center">
                <li className="cursor-pointer text-sm md:text-lg transition-all hover:font-bold"><Link to='/login' smooth="true">{isLoggedIn ? "CART": "LOGIN"}</Link></li>
                <li className="cursor-pointer text-sm md:text-lg transition-all hover:font-bold"><ScrollLink to='products' smooth="true">PRODUCTS</ScrollLink></li>
                <li className="cursor-pointer text-sm md:text-lg transition-all hover:font-bold"><ScrollLink to='about_us' smooth="true">ABOUT US</ScrollLink></li>
            </ul>
        </div>
        </nav>
        );
}

export default Navbar