import { Input } from 'postcss';
import React from 'react';
import { FaFacebook,FaTwitter,FaInstagramSquare,FaLinkedin,FaHome,FaVoicemail} from 'react-icons/fa';
import norton from '../../../images/New folder/norton.png'
import master from '../../../images/New folder/master.png'
import mastero from '../../../images/New folder/mastero.png'
import visa from '../../../images/New folder/visa.png'
import paypal from '../../../images/New folder/paypal.png'
import playStore from '../../../images/New folder/playStore.png'
import appleStore from '../../../images/New folder/apleStore.png'



const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div>
            <footer className='mb-6'>
                {/* Email Subscription */}
                <div className='bg-green-500 mx-3 my-4'>
                    <div className='flex flex-wrap justify-between py-4'>
                        <div className='flex items-center mx-auto'>
                            <div>
                            <input type="email" name="" id="" className='form-input px-4 py-3 rounded-md outline-none ' placeholder='Enter Your Email' />
                            <span className='text-white font-bold bg-green-800 px-2 py-3 rounded-md cursor-pointer'>Subscribe</span>
                            </div>
                            <div className='text-white font-[Poppins] sm:mx-2 md:mx-2 xl:mx-3 2xl:mx-4 mx-2'>
                                <p className='xl:text-xl md:text-small text-small  font-bold uppercase '>Sign up for our newsletter</p>
                                <p className='visible'>Receive email-only deals special offer</p>
                            </div>
                        </div>
                        <div className='mx-auto flex items-center gap-3 md:pt-2 '>
                            <div className='bg-white px-4 py-3 text-green-600 rounded-md text-xl'>
                                <FaFacebook></FaFacebook>
                            </div>
                            <div className='bg-white px-4 py-3 text-green-600 text-xl rounded-md'><FaInstagramSquare></FaInstagramSquare></div>
                            <div className='bg-white px-4 py-3 text-green-600 text-xl rounded-md'><FaLinkedin></FaLinkedin></div>
                            <div className='bg-white px-4 py-3 text-green-600 text-xl rounded-md'><FaTwitter></FaTwitter></div>
                        </div>
                    </div>
                </div>
                {/* footer link */}
                <div className='sm:ml-[0.5rem] md:mx-8 mx-2'>
                    <div className='flex flex-wrap items-center justify-around gap-4'>
                        <div className="py-4">
                            <p className='text-xl  font-semibold uppercase text-slate-700'>Contact US</p>
                            <div className='flex-col flex text-small items-start mb-4'>
                                <div className='flex mt-4'>
                                    <div className='bg-green-500  text-white text-xl rounded-sm p-2'><FaHome></FaHome></div>
                                    <div className='ml-6'>
                                        <p className='uppercase'>Address: <span className='lowercase  text-slate-600'>123 Mirpur-10 Dhaka, Bangladesh</span></p>
                                    </div>
                                </div>
                                <div className='flex mt-4'>
                                    <div className='bg-green-500  text-white text-xl rounded-sm p-2'><FaVoicemail></FaVoicemail></div>
                                    <div className='ml-6'>
                                        <p className='uppercase'>Email: <span className='lowercase  text-slate-600'>toufiqcse7@gmail.com</span></p>
                                        
                                    </div>
                                </div>
                                <div className='flex mt-4'>
                                    <div className='bg-green-500  text-white text-xl rounded-sm p-2'><FaHome></FaHome></div>
                                    <div className='ml-6'>
                                        <p className='uppercase'>Hot Mail: <span className='lowercase  text-slate-600'>+880-1779-764552</span></p>
                                        
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="py-4">
                            <p className='text-xl  font-semibold uppercase text-slate-700'>Corporate Info</p>
                            <div className='flex-col flex text-small items-start mb-4'>
                                <div className='flex flex-col text-small mt-4 text-slate-500 pb-1'>
                                    <p>Who we are ?</p>
                                    <p>Corporate Responsibility</p>
                                    <p>Bangladesh Laws</p>
                                    <p>Careers</p>
                                    <p>Privacy Policy</p>
                                    <p>Terms of Service</p>                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="py-4">
                            <p className='text-xl  font-semibold uppercase text-slate-700'>my account</p>
                            <div className='flex-col flex text-small items-start mb-4'>
                                <div className='flex flex-col mt-4 text-slate-500 pb-1'>
                                    <p>Site map</p>
                                    <p>Privacy Policy</p>
                                    <p>My Account</p>
                                    <p>Advanced Search</p>
                                    <p>Contact US</p>
                                    <p>My Wishlist</p>                    
                                </div>
                            </div>
                        </div>

                        <div className="py-4">
                            <p className='text-xl  font-semibold uppercase text-slate-700'>Need Help</p>
                            <div className='flex-col flex text-small items-start mb-4'>
                                <div className='flex flex-col mt-4 text-slate-500 pb-1'>
                                    <p>Order Tracking</p>
                                    <p>Privacy Policy</p>
                                    <p>Payment & Return</p>
                                    <p>Size Guide</p>
                                    <p>Product Care</p>
                                    <p>FAQ's</p>                    
                                </div>
                            </div>
                        </div>

                        <div className="py-4">
                            <p className='text-xl  font-semibold uppercase text-slate-700'>Save Money</p>
                            <div className='flex-col flex text-small items-start mb-4'>
                                <div className='flex flex-col mt-4 text-slate-500 pb-1'>
                                    <p>Discount Codes</p>
                                    <p>Computer Sales</p>
                                    <p>Special Sales</p>
                                    <p>Today Sales</p>
                                    <p>Voucher Directory</p>
                                    <p>On Sales</p>                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* payment icon */}
                <div className='bg-slate-200 my-1 mx-2'>
                    <div className='flex flex-wrap justify-around items-center gap-4 mx-auto '>
                        <div className='flex gap-4'> 
                            <img className='w-20' src={norton} alt="" />
                            <img className='w-20' src={norton} alt="" />
                        </div>
                        <div className='flex gap-4'>
                            <img className='w-28'  src={master} alt="" />
                            <img className='w-28' src={mastero} alt="" />
                            <img className='w-20' src={visa} alt="" />
                            <img className='w-20' src={paypal} alt="" />
                        </div>
                        <div className='flex gap-4'>
                            <img className='w-28'  src={playStore} alt="" />
                            <img className='w-28' src={playStore} alt="" />
                        </div>
                    </div>
                </div>
                {/* footer others link */}
                <div className='my-8 text-slate-500'>
                    <div className='flex justify-center items-center flex-wrap my-2 '>
                        <div className=''>POCO <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>HTC<span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>Xioami <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>Inifinix HOT<span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>RealMe <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        
                        

                    </div>

                    <div className='flex justify-center my-2'>
                        
                        <div className=''>Microsoft <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>Acer <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>Walton Passion <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>Lenovo ThinkPad <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>HP EliteBook <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>Assus <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>Lenovo <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        

                    </div>
                    <div className='flex justify-center my-2'>
                        <div className=''>One Plus <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>Nokia Lumia <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>SonY Erecsion <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>LG Lite <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        <div className=''>Motorola <span className='mx-4 border-r-2'>
                            </span>
                        </div>
                        
                        

                    </div>

                </div>
                {/* footer last */}
                <div className=' border-t-2 border-slate-200'>
                    <div className='my-4 '>
                        <p className='text-center text-slate-600 font-medium'>Copyright {year} E-Shop. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;