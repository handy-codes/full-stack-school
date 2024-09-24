'use client'

import Link from "next/link";
import { useState } from 'react';
import Image from 'next/image';
import MobileNav from "./MobileNav";



const NavbarPage = () => {
    const [click, setClick] = useState(false);
    const  handleClick = () => setClick(!click);
  
    return (
      <>
        <header className='top-0 sticky z-50 bg-[#003b65] shadow-lg w-full'> 
        <nav className="p-8 md:p-10 h-[80px] flex justify-between items-center">
  
            <div className="text-2xl min-w-2 text-white flex mr-4 justify-between">
              <Link href='/' >
              <div className="flex justify-center content-center items-center">
                <Image className='rounded-md mr-4' src="/highkclass_logo.png" width={28} height={28} alt="logo"/>
                <h1 className='text-[24px] font-semiboldbold sm:text-[24px]'>HighKlass Schools</h1>
              </div>
              </Link>
            </div>
            <ul className="hidden p-2 sm:flex gap-4 text-white text-xl ml-8">
              <li className='nav-item'>
                <Link href='/'>
                  Home
                </Link>
              </li>
              {/* <li className='nav-item'>
                <NavLink to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                  About
                </NavLink>
              </li> */}
              <li className='nav-item'>
                <Link href='/'>
                  Demo
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/'>
                  Career
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/'>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/portal'>
                  <p className="bg-[#b1982a] px-2 font-semibold">Login</p>
                </Link>
              </li>
            </ul>
            <div className="">
              <MobileNav/>
            </div>
        </nav>
        </header>
      </>
    )
  }
 
export default NavbarPage;







 
