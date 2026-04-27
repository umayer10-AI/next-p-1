import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    

    return (
        <div className='max-w-[80%] mx-auto mb-20'>
            {/* <h2 className='text-xl font-bold mb-3'>Dragon News</h2>
                <div className='space-y-3 p-4 shadow-xl rounded-xl'>
                    <img src={data.image_url} alt="logo" className='w-full h-80 rounded-2xl object-cover' />
                    <h2 className='text-2xl font-bold'>{data.title}</h2>
                    <h2>{data.details}</h2>
                        
                    <h2 className='btn btn-error text-white bg-red-600'>All news in this category</h2>
                </div> */}
        </div>
    );
};

export default page;