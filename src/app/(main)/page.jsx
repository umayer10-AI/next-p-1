import LeftSide from '@/component/LeftSide';
import MidSide from '@/component/MidSide';
import RightSide from '@/component/RightSide';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-[80%] mx-auto grid grid-cols-5 gap-5'>
      
      <LeftSide></LeftSide>

      <div className='col-span-3'>
        <MidSide></MidSide>
      </div>

      <RightSide></RightSide>
    </div>
  );
};

export default page;