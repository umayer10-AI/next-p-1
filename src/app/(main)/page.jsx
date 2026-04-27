import LeftSide from '@/component/LeftSide';
import RightSide from '@/component/RightSide';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-[80%] mx-auto grid'>
      {/* <h2 className='text-3xl font-bold text-center my-10'>Home Page</h2> */}
      <LeftSide></LeftSide>

      <RightSide></RightSide>
    </div>
  );
};

export default page;