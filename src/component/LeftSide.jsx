import { getCategories } from '@/lib/feching';
import Link from 'next/link';
import React from 'react';

const LeftSide = async () => {

    const data = await getCategories()
    // console.log(data)

    return (
        <div>
            <h2 className='text-xl font-bold mb-3'>All Caterogy</h2>
            <div className='flex flex-col gap-2'>
                {
                    data.map(v => <Link href={`/cart/${v.category_id}`} className={`btn`} key={v.category_id}>{v.category_name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSide;