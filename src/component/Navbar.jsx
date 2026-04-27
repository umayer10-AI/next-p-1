"use client"
import React from 'react';
import NavLink from './NavLink';
import { HiUserCircle } from 'react-icons/hi';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const Navbar = () => {

    const { data: session } = authClient.useSession()

    const user = session?.user

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 w-[80%] mx-auto my-5'>
            <div className='hidden md:flex'>

            </div>

            <div className='flex justify-center'>
                <NavLink></NavLink>
            </div>

            <div className='flex justify-end items-center gap-2'>
                <h2 className='font-semibold'>{user && user.name}</h2>
                <h2 className='text-5xl'><HiUserCircle /></h2>

                {
                    user? 
                    <button onClick={async () =>await authClient.signOut()} className='btn btn-primary'>LogOut</button>
                    : <Link href={'/signin'} className='btn bg-neutral text-white px-7'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;