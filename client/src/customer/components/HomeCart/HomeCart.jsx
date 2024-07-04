import React from 'react'
import image5 from '../../../assets/images/image5.jpg'

const HomeCart = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src={image5} alt=''/>
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-950'>Shirt</h3>
            <p className='mt-2 text-sm text-gray-500 '>This is a new suit</p> 

        </div>


    </div>
  )
}

export default HomeCart