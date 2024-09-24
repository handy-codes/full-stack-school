import React from 'react'
import { FiMenu } from "react-icons/fi";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';


export default function MobileNav() {
  return (
    <section className=' sm:hidden max-w-[264px]'>
      <Sheet>
      <SheetTrigger>
        <FiMenu color='#FFDD40' size={36} />
      </SheetTrigger>
      <SheetContent side="right" className="border-none bg-blue-950 w-[50vw]">
        <div className="">
        <ul className="flex flex-col justify-center items-center sm:hidden pt-14  gap-12 text-white text-2xl ml-8">
              <li className='nav-item'>
                <Link href='/'>
                  Home
                </Link>
              </li>
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
                  <p className="bg-[#b1982a] px-4 font-semibold">Login</p>
                </Link>
              </li>
            </ul>
        </div>
       </SheetContent>
    </Sheet>

  </section>
  )
}
