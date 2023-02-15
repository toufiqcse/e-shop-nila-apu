import React from 'react';
import camera from '../../images/New folder/camera.png'
import console from '../../images/New folder/geadsetRed.png'
import snakersShoes from '../../images/New folder/snakershoes.png'
import laptop from '../../images/New folder/laptop.png'
import './featureStyle.css'
const NewFeature = () => {
    return (
        <div>
            <div className='grid grid-cols-1 2xl:grid-rows-2 xl:grid-rows-2 md:grid-cols-2 2xl:grid-cols-3 gap-3 md:gap-6 xl:gap-3 mx-2 my-4'>
                <div className="mx-auto md:w-full  md:col-span-full 2xl:col-span-1 2xl:row-span-2 order-2 rounded-md xl:col-span-3    xl:row-span-3">
                    <div className='chairbg h-full group rounded-md bg-cyan-400 flex flex-auto justify-center'>
                        
                        <div className='px-16'>
                            <div className='w-2/3 mt-10  rounded-md text-white text-center bg-yellow-600 px-2 py-1 '>
                            SAVE UP TO 50%
                            </div>
                            <div className='mt-6'>
                            <p className='text-3xl font-bold '>Office Chairs </p>
                            <p className='text-3xl font-bold'>Product Of The Month</p>
                            </div>
                            <p className='text-xl font-medium mt-6 text-slate-800'>Discount 20% On Products & Free Shipping</p>
                            <button className='mt-16 bg-sky-600 rounded-md px-6 py-3 font-bold text-xl text-white hover:bg-sky-800'>
                                SHOP NOW
                            </button>
                        </div> 

                    </div>
                </div>
                <div className="2xl:order-0 h-full">
                    <div className='group box-border bg-orange-500 rounded-md overflow-hidden flex  cursor-pointer items-center  transition duration-200 ease-in-out  '>
                        <div className='w-full overflow-hidden   p-2 px-4 lg:px-5 2xl:px:4 text-white'>
                            <div className=' py-8  text-white'>
                            <p className='text-2xl pb-1 font-semibold'>Sneaker</p>
                            <p className='text-2xl font-semibold'>Nike Air Max 90</p>
                            <p className=' text-small pt-6'>Limited Time: Online Only</p>
                            </div>
                        </div>
                        <div className='flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44 mx-8 md:mx-2'>
                            <img className='w-full'  src={snakersShoes} alt="" />
                        </div>
                        
                    </div>
                </div>

                <div className="2xl:order-2">
                    <div className='group box-border bg-red-500 rounded-md overflow-hidden flex  cursor-pointer items-center  transition duration-200 ease-in-out  '>
                        <div className='w-full overflow-hidden   p-2 px-4 lg:px-5 2xl:px:4 text-white'>
                            <div className=' py-8  text-white'>
                            <p className='text-2xl pb-1 font-semibold'>Music  Red</p>
                            <p className='text-2xl font-semibold'>Special Edition 2023</p>
                            <p className=' text-small pt-6'>Top Quality Products</p>
                            </div>
                        </div>
                        <div className='flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44 mx-8 md:mx-2'>
                            <img  src={console} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="2xl:order-2">
                    <div className='group box-border bg-sky-700 rounded-md overflow-hidden flex  cursor-pointer items-center  transition duration-200 ease-in-out  '>
                        <div className='w-full overflow-hidden   p-2 px-4 lg:px-5 2xl:px:4 text-white'>
                            <div className=' py-8  text-white'>
                            <p className='text-2xl pb-1 font-semibold'>Microsoft</p>
                            <p className='text-2xl font-semibold'>Surface laptop</p>
                            <p className=' text-small pt-6'>Discount 20% On Products</p>
                            </div>
                        </div>
                        <div className='flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44 mx-8 md:mx-2'>
                            <img  src={laptop} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="2xl:order-2">
                    <div className='group box-border bg-green-500 rounded-md overflow-hidden flex  cursor-pointer items-center  transition duration-200 ease-in-out  '>
                        <div className='w-full overflow-hidden   p-2 px-4 lg:px-5 2xl:px:4 text-white'>
                            <div className=' py-8  text-white'>
                            <p className='text-2xl pb-1 font-semibold'>Cameras</p>
                            <p className='text-2xl font-semibold'>Best Sport Edition</p>
                            <p className=' text-small pt-6'>Free Shipping All Order</p>
                            </div>
                        </div>
                        <div className='flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44 mx-8 md:mx-2'>
                            <img  src={camera} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewFeature;