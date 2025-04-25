import React from 'react'

function HeroBoxes({heading,subheading}) {
  return (
    <>
        <div className='p-5 rounded-xl shadow-2xl w-56 h-auto'>
            <div className='text-lg font-semibold '>{heading}</div>
            <div className='font-medium text-gray-500'>{subheading}</div>
            <div className='h-1 mt-2 w-full bg-gradient-to-r from-[#1EAEDB] to-[#4F46E5] rounded-full'></div>
        </div>
        
    </>
  )
}

export default HeroBoxes