import React from 'react';
import NavLink from './NavLink';
import { HiUserCircle } from 'react-icons/hi';

const Navbar = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto'>
            <div className='hidden md:flex'>

            </div>

            <div className='flex justify-center'>
                <NavLink></NavLink>
            </div>

            <div className='flex justify-end items-center'>
                <h2 className='text-4xl'><HiUserCircle /></h2>
                <button className='btn bg-neutral text-white px-7'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;