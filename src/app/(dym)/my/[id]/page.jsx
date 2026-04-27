import Header from '@/component/Header';
import Press from '@/component/Press';
import RightSide from '@/component/RightSide';
import { getNews } from '@/lib/feching';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const page = async ({params}) => {

    const {id} = await params
    const data = await getNews(id)
    console.log(data)

    return (
        <div className='max-w-[80%] mx-auto mb-20'>
            <Header></Header>
            <div className='grid grid-cols-4 gap-5'>
                <div className='col-span-3'>
                    <h2 className='text-xl font-bold mb-3'>Dragon News</h2>
                    <div className='space-y-3 p-4 shadow-xl rounded-xl'>
                        <img src={data.image_url} alt="logo" className='w-full h-80 rounded-2xl object-cover' />
                        <h2 className='text-2xl font-bold'>{data.title}</h2>
                        <h2>{data.details}</h2>
                                
                        <Press></Press>
                    </div>
                </div>
            <RightSide></RightSide>
            </div>
        </div>
    );
};

export default page;