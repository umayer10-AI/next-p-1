"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {

    const p = usePathname()

    return (
        <div className='flex items-center gap-2'>
            <Link href={'/'} className={p==="/" ? "btn btn-info" : "btn"}>Home</Link>
            <Link href={'/about'} className={p==="/about" ? "btn btn-info" : "btn"}>About</Link>
            <Link href={'/career'} className={p==="/career" ? "btn btn-info" : "btn"}>Career</Link>
        </div>
    );
};

export default NavLink;