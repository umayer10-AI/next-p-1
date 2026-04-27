import LeftSide from '@/component/LeftSide';
import MidSide from '@/component/MidSide';
import RightSide from '@/component/RightSide';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    // console.log(id)

    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-5 gap-5'>
      
            <LeftSide id={id}></LeftSide>

            <div className='col-span-3'>
                <MidSide id={id}></MidSide>
            </div>

            <RightSide></RightSide>

        </div>
    );
};

export default page;