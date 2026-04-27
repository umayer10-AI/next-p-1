import LeftSide from '@/component/LeftSide';
import React from 'react';

const page = () => {
  return (
    <div className='max-w-[80%] mx-auto'>
      {/* <h2 className='text-3xl font-bold text-center my-10'>Home Page</h2> */}
      <LeftSide></LeftSide>
    </div>
  );
};

export default page;