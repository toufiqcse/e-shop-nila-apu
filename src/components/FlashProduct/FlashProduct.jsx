import React from 'react';
import ledTv from '../../images/New folder/tvLed.png'
import phoneStand from '../../images/New folder/phoneStand.png'

const FlashProduct = () => {
    return (
        <div>
            <div className='flex flex-wrap md:gap-4  mx-3'>
                <div className= "w-2/5 bg-gradient-to-tr from-green-500 to-lime-500 my-2 rounded-md">
                    <div className='flex items-center justify-center mt-2'>
                        <div className="px-8 py-6 font-[Roboto] flex flex-col items-start">
                            <button className='bg-yellow-400 mb-2  rounded-md uppercase  md:px-3  md:text-small'>
                                Imac mk452lla/21.5
                            </button>
                            <p className='text-2xl text-slate-300'>Apple Celebratres</p>
                            <span className='font-bold text-white uppercase text-2xl'>8Gb 1tb intel core</  span>
                            <p className='uppercase text-slate-200 pt-4 text-xl font-bold'>from <span className='text-3xl text-yellow-400 font-bold'>$320</span></p>
                        </div>
                        <div className="img items-center h-full justify-center overflow-hidden">
                            <img className='w-[20rem] h-full' src={ledTv} alt="" />
                        </div>
                    </div>
                </div>
                <div className= "w-2/5 bg-gradient-to-br from-indigo-500 to-indigo-500 my-2 rounded-md">
                    <div className='flex items-center  mt-2'>
                        <div className="px-8 py-6 font-[Roboto] flex flex-col items-start">
                            <button className='bg-yellow-400 mb-2  rounded-md uppercase  md:px-3  text-small'>
                                Imac mk452lla/21.5
                            </button>
                            <p className='text-2xl text-slate-300'>Apple Celebratres</p>
                            <span className='font-bold text-white uppercase text-2xl'>8Gb 1tb intel core</  span>
                            <p className='uppercase text-slate-200 pt-4 text-xl font-bold'>from <span className='text-3xl text-yellow-400 font-bold'>$320</span></p>
                        </div>
                        <div className="img  h-full  mx-auto">
                            <img className='w-[12rem] h-full' src={phoneStand} alt="" />
                        </div>
                    </div>
                </div>               
            </div>
        </div>
    );
};

export default FlashProduct;