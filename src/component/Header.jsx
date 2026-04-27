import React from 'react';
import img from "../assets/logo.png"
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='my-5 text-center space-y-1 font-semibold'>
            <div>
                <Image height={320} width={320} src={img} alt='logo' className='mx-auto'></Image>
            </div>
            <h2 className='text-gray-500'>Journalism Without Fear or Favour</h2>
            <h2>{format(new Date(), "MMMM, EEEE dd, yyyy")}</h2>
        </div>
    );
};

export default Header;