import React from 'react'

function FeatureBox({icon,heading,subheading}) {
  return (
   <>
    <div className='border-2 border-gray-300 p-5 rounded-xl shadow-xl w-fit  '>
        <div className='text-[#1EAEDB] cursor-pointer bg-[#E5DEFF] p-3 rounded-lg w-fit '>{icon}</div>
        <div className='text-lg font-semibold py-3 '>{heading}</div>
        <div className='font-medium text-gray-500 pb-2'>{subheading}</div>
    </div>
   </>
  )
}

export default FeatureBox