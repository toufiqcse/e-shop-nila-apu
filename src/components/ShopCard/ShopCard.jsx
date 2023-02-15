import React from 'react';
import './ShopCard.css'
import phone from '../../images/shopCard/phone.png'

const ShopCard = () => {
    return (
        <div>
            <div className='grid grid-cols-1  gap-6 my-4 sm:grid-cols-1 md:grid-cols-2'>
                <div className='shop-card mx-2 rounded-md'>
                    {/* for image */}
                    <div className='flex flex-wrap justify-end gap-4'>
                        <div className=' flex justify-center '>
                             <img className='w-2/4  pt-20' src={phone} alt="" />
                        </div>
                    </div>
                    {/* feature */}
                    <div className='w-auto flex flex-wrap mt-[-43px]'>
                            <div className=" text-xl font-[Roboto] text-white mx-4 ">
                                <p>Best Seller</p>
                                <div className="bg-yellow-400 duration-500 ease-in p-1">
                                </div>
                            </div>
                        </div>
                        {/* product name */}
                    <div className='flex flex-wrap justify-between mt-14 mb-6 font-[Roboto]'>
                         <div className='mx-4'>
                            <h1 className='text-5xl font-bold  text-yellow-400'>ePhone X</h1>
                            <p className='text-medium text-yellow-400 pt-1'>Morbi various maximus convallis
                            </p>
                        </div>
                        {/* shop button  */}
                        <div>
                            <button className='bg-slate-300 px-8 py-2 mt-2 text-xl text-yellow-700 mr-14 rounded-full hover:bg-yellow-400 hover:text-white duration-500 ease-in'>Shop Now</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ShopCard;