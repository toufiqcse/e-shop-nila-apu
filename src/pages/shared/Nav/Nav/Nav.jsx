import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='flex justify-between h-20  px-20 py-4 items-center bg-slate-700 text-white'>
            <div className="text-2xl">E Shop</div>
            <div>
                <NavLink className="text-xl mx-4" to="/">Home</NavLink>
                <NavLink className="text-xl mx-4" to="/checkout">Checkout</NavLink>
                <NavLink className="text-xl mx-4" to="/products">Products </NavLink>
                <NavLink className="text-xl mx-4" to="/testing">Testing </NavLink>
            </div>
        </div>
    );
};

export default Nav;