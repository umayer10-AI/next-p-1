import React from 'react';
import img from "../assets/logo.png"
import Image from 'next/image';

const Header = () => {
    return (
        <div className='my-5'>
            <div>
                <Image height={320} width={320} src={img} alt='logo' className='mx-auto'></Image>
            </div>
            <h2 className='text-gray-500 font-semibold'>Journalism Without Fear or Favour</h2>
            <h2>{format(new Date(2014, 1, 11), "yyyy-MM-dd")}</h2>
        </div>
    );
};

export default Header;