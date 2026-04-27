"use client"
import { Data } from '@/context/Context';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Press = () => {

    const {s} = useContext(Data)

    return <Link href={`/cart/${s}`} className='btn btn-error text-white bg-red-600'><FaArrowLeftLong />All news in this category</Link>
};

export default Press;