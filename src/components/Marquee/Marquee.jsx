// @ts-nocheck
import React from 'react';

const Marquee = () => {
    return (
        <div className='mx-1 my-3'>
            <div className='bg-yellow-600 px-6 py-3 items-start justify-around text-white text-small font-[Roboto] font-semibold transition  ' >
                <marquee>
                    <span className='mx-20'>Instant Cashback On Wallet and UPI Transaction</span>
                    <span className='mx-20'>Mega Offer On Gadgets Fresh Up to 40%</span>
                    <span className='mx-20'>Bkash Payment Up to 20% Cashback </span>
                </marquee>
            </div>
        </div>
    );
};

export default Marquee;