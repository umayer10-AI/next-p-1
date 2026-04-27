"use client"
import { Data } from '@/context/Context';
import Link from 'next/link';
import React, { useContext } from 'react';

const CaregoryList = ({p,id}) => {

    const {setS} = useContext(Data)

    return <Link href={`/cart/${p.category_id}`} onClick={() => setS(p.category_id)} className={`btn ${id===p.category_id && "btn-warning"}`}>{p.category_name}</Link>
};

export default CaregoryList;