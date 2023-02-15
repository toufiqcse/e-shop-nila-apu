import React from 'react';
import { useState } from 'react';
import {BsHeartFill,BsEyeFill,BsStarHalf,BsFillCartCheckFill} from 'react-icons/bs'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {FaStarHalfAlt} from 'react-icons/fa'
const ShowProducts = ({product}) => {
    const {image,title, price, discountPercentage,rating} = product
    

    return (
        <div className='relative bg-white rounded-lg font-[Inter] cursor-pointer'>
            <div className='p-4 '>
                <img className='rounded-md w-full h-[10rem]' src={image} alt="image" />
                <div>
                    <p className='text-center font-semibold text-gray-800 text-[1.2rem] pt-4 pb-1 h-16'>{title}</p>
                    
                    <div className='flex items-center justify-center'>
                        <p className='text-sm font-bold pr-1 text-indigo-800'>$</p>
                        <p className='font-bold font-numFont text-xl text-indigo-800'> {price}.00</p>
                    </div>
                    <div className='flex gap-1 items-center justify-center text-yellow-500 py-2'>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <BsStarHalf></BsStarHalf>
                    <FaStarHalfAlt></FaStarHalfAlt>
                    <div className='text-indigo-500 text-sm px-1'>
                        ({rating})
                    </div>
                    </div>
                </div>
                <div className='absolute top-3 bg-red-600 rounded-lg px-1'>
                    <span className='font-bold text-white text-sm'>{discountPercentage}%</span>
                    
                </div>
                
                <div className='bg-indigo-800 px-4 py-2 text-white font-bold rounded-md shadow-md flex items-center justify-center '>
                    <button className='outline-none text-center px-1'>Cart</button>
                    <BsFillCartCheckFill className=' '></BsFillCartCheckFill>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;