import React from 'react';
import menFashion from '../../images/New folder/mensDress.png'
import womenFashin from '../../images/New folder/womensDress.png'
import babyDress from '../../images/New folder/babyLying.png'
const FashionBanner = () => {
    return (
        <div>
            <div className='mx-3 my-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 xl:gap-4 2xl:gap-4 '>
                <div className='bg-gradient-to-br from-blue-700 to-sky-600 rounded-md'>
                    <div className='group overflow-hidden font-[Poppins]  flex items-center cursor-pointer'>
                    <div className=' px-6 overflow-hidden  text-white'>
                        <p className='text-3xl font-bold pb-2'>Men Collection</p>
                        <p className='text-xl md:text-sm pb-8'>Best Premium Quality</p>
                        <button className='px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-sky-300'>Shop Now</button>
                    </div>
                    <div className='flex flex-shrink-0 w-32 md:w-36 sm:w-44 mx-auto'>
                        <img src={menFashion} alt="" />
                    </div>
                </div>
                </div>
                {/*  */}
                <div className='bg-gradient-to-br from-blue-600 to-sky-400 rounded-md'>
                    <div className='group overflow-hidden font-[Poppins]  flex items-center cursor-pointer'>
                    <div className=' px-6 overflow-hidden  text-white'>
                        <p className='text-3xl font-bold pb-2'>Women Collection</p>
                        <p className='text-xl pb-8'>Best Premium Quality</p>
                        <button className='px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-sky-300'>Shop Now</button>
                    </div>
                    <div className='flex flex-shrink-0 w-32 md:w-36 sm:w-44 mx-auto'>
                        <img src={womenFashin} alt="" />
                    </div>
                </div>
                </div>
                {/*  */}
                <div className='bg-gradient-to-br from-blue-700 to-sky-500 rounded-md'>
                    <div className='group overflow-hidden font-[Poppins]  flex items-center cursor-pointer'>
                    <div className=' px-6 overflow-hidden  text-white'>
                        <p className='text-3xl font-bold pb-2'>All For Baby</p>
                        <p className='text-xl pb-8'>Best Premium Quality</p>
                        <button className='px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 to-sky-300'>Shop Now</button>
                    </div>
                    <div className='flex flex-shrink-0 w-32 md:w-36 sm:w-44 mx-auto'>
                        <img src={babyDress} alt="" />
                    </div>
                </div>
                </div>
                {/*  */}
            </div>
        </div>
    );
};

export default FashionBanner;