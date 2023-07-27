import React from 'react'
import { logo } from '../assets';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="w-full flex flex-row justify-between mt-[1%]">
                <img
                src={logo}
                className="pl-2 md:pl-8 h-128 object-contain"
                alt="Logo."
                href="/"
             />
            <ul className="flex flex-row gap-12 mr-12 items-center">
                <li className="cursor-pointer text-sm md:text-lg transition-all hover:font-bold"><Link to='products' smooth={true}>PRODUCTS</Link></li>
                <li className="cursor-pointer text-sm md:text-lg transition-all hover:font-bold"><Link to='about_us' smooth={true}>ABOUT US</Link></li>
            </ul>
        </div>
        </nav>
        );
}

export default Navbar