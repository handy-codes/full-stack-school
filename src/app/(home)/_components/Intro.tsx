import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <div className='p-8  '>
        <div className="flex-row-reverse flex flex-wrap max-sm:gap-4 justify-center max-w-7xl mx-auto">
          <div className=" bg-[#003B65] p-6 w-[90vw] sm:w-[45vw] h-[75vh] flex content-center flex-col items-center">
            <h1 className='text-white text-2xl font-bold sm:text-3xl'>Welcome to HighKlass Schools</h1>
            <p className='text-[#ABBECC] text-justify pt-3 pb-3 text-[18px]'>Its been two decades of churning out brilliant minds. Here is the place where each child excels in character and learning!
             Also, leveraging on our latest software kit, everone - school admin, teachers and
             students can now login to the school portal as well as their parents to check on their child's performance on the go.    
            </p>
          </div>
          <div className="b rounded-lg sm:inline-block w-[90vw] sm:w-[45vw] h-[75vh] ">
            <img className='w-[100%] h-[85%] overflow-hidden object-cover' src="/mama.jpg" alt="mama" />
            <div className="w-[100%] p-6 h-[15%] flex flex-col justify-center items-center bg-lime-950 py-4 text-white">
             <p className='text-xl'>Dr. Mrs Layo Olaluwoye</p>
             <p>Founder & Proprietress</p>
             {/* <p>HighKlass Intl Schools </p> */}
            </div>
          </div>
        </div>
    </div>
  )
}
