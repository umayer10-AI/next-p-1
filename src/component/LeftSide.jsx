import { getCategories } from '@/lib/feching';
import Link from 'next/link';
import React from 'react';
import CaregoryList from './CaregoryList';

const LeftSide = async ({id}) => {

    const data = await getCategories()
    // console.log(data)

    return (
        <div>
            <h2 className='text-xl font-bold mb-3'>All Caterogy</h2>
            <div className='flex flex-col gap-2'>
                {
                    data.map(v => <CaregoryList id={id} key={v.category_id} p={v}></CaregoryList>)
                }
            </div>
        </div>
    );
};

export default LeftSide;