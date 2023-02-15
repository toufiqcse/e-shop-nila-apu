// @ts-nocheck
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {BiCheck,BiCreditCard} from 'react-icons/bi'
import {HiOutlineChevronRight} from 'react-icons/hi'
import {MdAlternateEmail} from 'react-icons/md'
const Checkout = () => {
    return (
        <div>
            {/* shopping header */}
            <div className='border-slate-200 border-b-2 py-3 '>
                <div className="flex  justify-between items-center container mx-auto ">
                    <div className='text-xl font-[Inter] font-semibold'>E Shop</div>

                        <div className="relative  px-4">
                            <ul className='relative flex w-full items-center justify-between space-x-2 sm:space-x-2'>
                                <li className='flex items-center space-x-3 text-left sm:space-x-4'>
                                    <Link className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700'>
                                
                                    <BiCheck className='text-xl'></BiCheck>
                                    </Link>
                                    <span className='text-gray-600 '>Shop</span>
                                </li>
                                    <HiOutlineChevronRight className='h-6 w-6 text-gray-400'></HiOutlineChevronRight>
                                <li className='flex items-center space-x-3 text-left sm:space-x-4'>
                                    <Link className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-600  font-semibold  text-white ring ring-gray-600 ring-offset-2  text-sm'>
                                    2
                                    </Link>
                                    <span className='text-gray-600 font-semibold'>Shipping</span>
                                </li>
                                    <HiOutlineChevronRight className='h-6 w-6 text-gray-400'></HiOutlineChevronRight>
                                <li className='flex items-center space-x-3 text-left sm:space-x-4'>
                                <Link className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-400  font-semibold  text-white   text-sm'>
                                3
                                </Link>
                                <span className='text-gray-600 font-semibold'>Payments</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* shopping header  end*/}

            {/* order and payment section */}
            <div className='flex flex-wrap lg:flex-nowrap xl:flex-nowrap  xl:container lg:mx-10 xl:mx-auto gap-6 font-[Inter] '>
                {/*Order section  end */}
                <div className='lg:w-1/2 xl:w-1/2 w-full   pt-8'>
                    <div>
                        <h1 className='text-xl font-medium text-slate-700'>Order Summary</h1>
                        <p className='text-slate-400'>Check your items.And select a suitable shipping method</p>
                    </div>
                    {/* selected product here */}
                    <div className='border-2 border-slate-100 rounded-lg my-6 py-4 '>
                        <div className='flex flex-col sm:flex-row items-center  gap-3  pb-4 px-4 bg-white'>
                            <img className='m-2 h-24 w-28 rounded-lg' src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />                           
                            <div>
                                <h3 className='text-xl font-semibold text-slate-700'>Sneaker Air Max Pro 8888 - Super Light</h3>
                                <p className='text-slate-500'>32FU - 3.5US</p>
                                <h4 className='text-xl font-bold text-yellow-600'>$338.99</h4>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center  gap-3   px-4'>
                            <img className='m-2 h-24 w-28 rounded-lg' src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />                           
                            <div>
                                <h3 className='text-xl font-semibold text-slate-700'>Nike Air Max Pro 8888 - Super Light</h3>
                                <p className='text-slate-500'>42EU - 8.5US</p>
                                <h4 className='text-xl font-bold text-yellow-600'>$138.99</h4>
                            </div>
                        </div>
                    </div>

                    {/* ====Shipping Method Start========= */}
            <div className='mx-auto container'>
                <div>
                <h1 className='text-xl font-medium text-slate-700'>Shipping Method</h1>
                </div>
                <form className='mt-6 grid gap-6'>
                    <div className="relative">
                        <input className='peer hidden ' id='radio_1' name='radio' type="radio" checked />
                        <span className='peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white'></span>
                        <label className='peer-check:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 'for="radio_1">
                            <img className='w-14 object-contain' src="https://www.pngitem.com/pimgs/m/4-41925_fedex-logo-fedex-hd-png-download.png" alt="" />
                            <div className='ml-5'>
                                <span className='mt-2 font-semibold'>Fedex Delivery</span>
                                <p className='text-slate-500 text-sm leading-6'>Delivery: 2-4 days</p>
                            </div>
                        </label>
                    </div>
                    <div className="relative">
                        <input className='peer hidden ' id='radio_2' name='radio' type="radio"  />
                        <span className='peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white'></span>
                        <label className='peer-check:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 focus:bg-gray-700'for="radio_2">
                            <img className='w-14 object-contain' src="https://play-lh.googleusercontent.com/ge5slpBr9DmVDPk5yjIddZhCR5lYqRXJv5QAunyvRrOGv48VR1aaCyEfPix0xbKQ3w" alt="" />
                            <div className='ml-5'>
                                <span className='mt-2 font-semibold'>Redex Delivery</span>
                                <p className='text-slate-500 text-sm leading-6'>Delivery: 2-4 days</p>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
            {/* ====Shipping Method end======== */}

                </div>
                {/*Order section   */}

                


                {/* Payment summary */}
                <div className='lg:w-1/2 xl:w-1/2 w-full bg-slate-50 px-4 pt-8 font-[Inter]'>
                    <div>
                        <h1 className='text-xl font-medium text-slate-700'>Payment Details</h1>
                        <p className='text-slate-400'>Complete your order by providing payment details</p>
                    </div>
                    <div>
                        <label htmlFor="email" className='mt-4 mb-2 block text-sm font-medium'>Email</label>
                        <div className='relative'>
                            <input type="email" name="email" id="email" className='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='me.email@gmail.com' />
                            <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                                <MdAlternateEmail></MdAlternateEmail>

                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className='mt-4 mb-2 block text-sm font-medium'>Card Holder</label>
                        <div className='relative'>
                            <input type="text" name="email" id="email" className='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='Enter Your Full Name' />
                            <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                               <BiCreditCard></BiCreditCard>

                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <label htmlFor="card-no" className='mt-4 mb-2 block text-sm font-medium'>Card Details</label>
                        <div className="flex">
                            <div className='relative w-7/12 flex-shrink-0'>
                                <input type="text" name="card-no" id="card-no" className='w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='xxxx-xxxx-xxxx-xxxx' spellCheck='false' data-ms-editor='true' />
                                <div className='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                                    <BiCreditCard></BiCreditCard>
                                </div>
                            </div>
                            <input type="text" name="credit-expiry " id="credit-expiry" className='w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 ' placeholder='MM/YY' spellCheck='false' data-ms-editor="true" />
                            <input type="text" name="credit-cvc" id="credit-cvc" className='w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='CVC' spellCheck='false' />
                        </div>
                        <div>
                            <label htmlFor="billing-address" className='mt-4 mb-2 block text-sm font-semibold'>Billing Address</label>
                            <div className='flex fex-col sm:flex-row'>
                                <div className='relative flex flex-shrink-0 sm:w-7/12'>
                                    <input type="text" name="billing-address" id="billing-address" className='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 ' placeholder='Street Address'  spellCheck='false'/>
                                    <div className='pointer-events-none absolute left-0 inset-y-0 inline-flex items-center px-3'>
                                        <img className='h-4 w-4 object-contain' src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                                    </div>
                                </div>
                                <select type='text' name="billing-state" id="" className='w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500'>
                                    <option value="State">State</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="mirpur">Mirpur-10</option>
                                </select>
                                <input type="text" name="billing-zip" id="billing-zip" className='flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 outline-none text-sm shadow-sm sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500' placeholder='ZIP' spellCheck="false" />
                            </div>
                            <div className='mt-6 border-t border-b py-2'>
                                <div className="flex item-center justify-between">
                                    <p className='text-sm font-medium text-gray-900'>Subtotal</p>
                                    <p className='font-semibold text-gray-900'>$499.00</p>
                                </div>
                                <div className="flex item-center justify-between">
                                    <p className='text-sm font-medium text-gray-900'>Shipping</p>
                                    <p className='font-semibold text-gray-900'>$9.00</p>
                                </div>
                            </div>
                            <div className='mt-6 flex items-center justify-between'>
                                <p className='text-sm font-medium text-gray-900'>Total</p>
                                    <p className=' text-2xl font-semibold text-gray-900'>$508.00</p>
                            </div>
                        </div>

                    </div>

                    <button to='' className='mt-4 mb-8 w-full rounded-md bg-orange-500 px-6 py-3 font-medium text-white outline-none '>Place Order</button>
                </div>
            </div>
        {/* ==================order and payment section  end==============*/}

            
        </div>
    );
};

export default Checkout;