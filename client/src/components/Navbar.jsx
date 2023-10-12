import { useCallback, useEffect, useState } from 'react'
import { logo } from '../assets';
import { Link } from 'react-router-dom'
import { Link as ScrollLink} from "react-scroll";

import { LuX, LuAlignJustify } from 'react-icons/lu';
import useClickOutside from '../hooks/useClickoutSide';

const navList = [
    {
        id: 1,
        listName: 'Products',
        scrollTo: 'products'
    },
    {
        id: 2,
        listName: 'About us',
        scrollTo: 'about_us'
    },

]
const Navbar = ({ isLoggedIn }) => {
    const [toggleNav, setToggleNav] = useState(false);
  
    const [activateHeader, setActivateHeader] = useState(false);
  
    const handleToggleNav = useCallback(() => {
        setToggleNav((value) => !value);
    }, []);
    
    const navRef = useClickOutside(() => setToggleNav(false));
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setActivateHeader(true);
          } else {
            setActivateHeader(false);
          }
    
        }
    
        
        // add evenListener to activate header
        window.addEventListener('scroll', handleScroll);
      
        // cleanup function
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, []);
    return (
        <header
            id="navbar"
            className={`
                py-[20px]
                md:py-[10px]
                fixed
                top-0
                left-0
                w-full
                z-[4]
                ${activateHeader && 'header-active'}
            `}
        >
            <div className="px-[16px] flex items-center justify-between">
                <Link to='/' className='flex items-center'>
                    <img
                        src={logo}
                        width={37}
						height={28}
                        className="w-[60px]"
                        alt="Logo"
                    />
                </Link>

                {/* navbar */}
                <nav
                    ref={navRef}
                    className={`
                        fixed
                        top-0
                        right-0
                        max-w-[350px]
                        w-full
                        h-[100dvh]
                        bg-white
                        py-[30px]
                        px-[16px]
                        flex
                        flex-col
                        z-[1]
                        duration-500
                        transition
                        navbar
                        ${toggleNav ? 'translate-x-0' : 'translate-x-full'}
                    `}
                >
                    {/* navbar top */}
                    <div className="flex items-center justify-between md:hidden">
                        <Link to='/' className='flex items-center'>
                            <img
                                src={logo}
                                width={37}
                                height={28}
                                className="w-[60px]"
                                alt="Logo"
                            />
                        </Link>
                        <button
							aria-label="close menu"
							className="text-3xl"
                            onClick={handleToggleNav}
                        >
							<LuX />
						</button>
                    </div>

                    {/* navbar list */}

                    <ul className="mt-[50px] md:flex md:mx-auto md:gap-[30px] md:mt-0 ">
                        {navList.map((list) => (
                            <li
                                
                                key={list.id}
                                className='
                                relative
                                
                                cursor-pointer
                                text-lg
                                capitalize
                                md:uppercase
                                font-semibold
                                py-[8px]
                                hover:font-bold
                                '
                            >
                                <ScrollLink onClick={handleToggleNav} offset={-100} to={list.scrollTo} smooth="true">
                                    {list.listName}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                        
                    <div
						className="
                            mt-auto
                            pt-[20px]
                            md:pt-0
                            border-t-2
                            md:border-t-0
                            md:ml-0
                            flex
                            justify-around
                            items-center
                        "
                    >
                        {!isLoggedIn && (
                            <Link
                            to="/login"
                            className="
                                btn btn-primary
                            ">
                                Login
                            </Link>
                        )}

                    </div>
                </nav>
                
                <button
                    aria-label='open menu'
                    onClick={handleToggleNav}
                    className='text-3xl  md:hidden'
                >
                    <LuAlignJustify />
                </button>
                {/* overlay */}
                {toggleNav && (
                <div
                    className={`
                    fixed
                    top-0
                    left-0
                    bottom-0
                    w-full
                    bg-white
                    opacity-50
                    ease
                    duration-300
                    transition-all
                    md:hidden
                    `}
                />
                 )} 
            </div>
        </header>
        );
}

export default Navbar


/*
<ul className="mt-[50px]">
    {!isLoggedIn && <li className="cursor-pointer text-xs md:text-lg transition-all hover:font-bold"><Link to='/login' smooth="true">LOG IN</Link></li>}
    <li className="cursor-pointer text-xs md:text-lg transition-all hover:font-bold"><ScrollLink to='products' smooth="true">PRODUCTS</ScrollLink></li>
    <li className="cursor-pointer text-xs md:text-lg transition-all hover:font-bold"><ScrollLink to='about_us' smooth="true">ABOUT US</ScrollLink></li>
</ul>
*/