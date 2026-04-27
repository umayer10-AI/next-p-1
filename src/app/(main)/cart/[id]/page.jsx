import LeftSide from '@/component/LeftSide';
import MidSide from '@/component/MidSide';
import RightSide from '@/component/RightSide';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params

    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-5'>
      
            <div className='order-2'>
                <LeftSide id={id}></LeftSide>
            </div>

            <div className='lg:col-span-3 order-2'>
                <MidSide id={id}></MidSide>
            </div>

            <div className='order-1 lg:order-3'>
                <RightSide></RightSide>
            </div>

        </div>
    );
};

export default page;