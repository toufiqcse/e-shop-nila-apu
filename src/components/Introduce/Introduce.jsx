import React from 'react';
import './Introduce.css'
import { FaSellsy,FaShippingFast,FaReact,FaHome } from 'react-icons/fa';
const Introduce = () => {
    
    return (
        <div className=''>
            <div className='introduce  mx-2 my-2'>
                <div className='text-center  py-10  font-[Roboto] text-4xl font-bold'>
                    <span className='text-cyan-500 '>Why Shop </span>
                    <span className='text-white'>With Us ?</span>
                </div>

                <div className='flex gap-6 mx-14 font-[Roboto] text-slate-300'>
                    <div className='w-1/4 px-3  '>
                        <div className="flex flex-col  shadow-md items-center px-2">
                        {/* hover:-translate-y-3 transition duration-300 ease-in-out */}
                            <div>
                                <FaShippingFast className='text-7xl text-orange-400'></FaShippingFast>
                            </div>
                            <div className='text-center   text-slate-100 font-bold'>
                                <p className='text-2xl  my-1'>Free Shipping On First Order</p>
                           
                            </div>                          
                            <p className='text-center my-2 text-slate-300 font-small'>Comprehensive quality & affordable price</p>
                            <div className='mb-14'>
                                <a className='text-xl text-slate-200 font-semibold underline' href="#">Learn more</a>
                            </div>    
                        </div>
                    </div>
                    <div className='w-1/4'>
                    <div className="flex flex-col  shadow-md items-center px-2">
                        {/* hover:-translate-y-3 transition duration-300 ease-in-out */}
                            <div>
                                <FaReact className='text-7xl text-orange-400'></FaReact>
                            </div>
                            <div className='text-center   text-slate-100 font-bold'>
                                <p className='text-2xl  my-1'>Free Shipping On First Order</p>
                           
                            </div>                          
                            <p className='text-center my-2 text-slate-300 font-small'>Comprehensive quality & affordable price</p>
                            <div className='mb-14'>
                                <a className='text-xl text-slate-200 font-semibold underline' href="#">Learn more</a>
                            </div>    
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className="flex flex-col  shadow-md items-center px-2">
                        {/* hover:-translate-y-3 transition duration-300 ease-in-out */}
                            <div>
                                <FaSellsy className='text-7xl text-orange-400'></FaSellsy>
                            </div>
                            <div className='text-center   text-slate-100 font-bold'>
                                <p className='text-2xl  my-1'>Free Shipping On First Order</p>
                           
                            </div>                          
                            <p className='text-center my-2 text-slate-300 font-small'>Comprehensive quality & affordable price</p>
                            <div className='mb-14'>
                                <a className='text-xl text-slate-200 font-semibold underline' href="#">Learn more</a>
                            </div>    
                        </div></div>
                    <div className='w-1/4'><div className="flex flex-col  shadow-md items-center px-2">
                        {/* hover:-translate-y-3 transition duration-300 ease-in-out */}
                            <div>
                                <FaHome className='text-7xl text-orange-400'></FaHome>
                            </div>
                            <div className='text-center   text-slate-100 font-bold'>
                                <p className='text-2xl  my-1'>Free Shipping On First Order</p>
                           
                            </div>                          
                            <p className='text-center my-2 text-slate-300 font-small'>Comprehensive quality & affordable price</p>
                            <div className='mb-14'>
                                <a className='text-xl text-slate-200 font-semibold underline' href="#">Learn more</a>
                            </div>    
                        </div></div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;