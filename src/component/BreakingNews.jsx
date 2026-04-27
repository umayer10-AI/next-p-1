import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
    return (
        <div className='max-w-[80%] mx-auto flex items-center gap-3 bg-gray-100 py-2 px-3 rounded-lg'>
            <button className='btn bg-red-500 text-white'>Latest</button>
            <Marquee>
                <div className='flex gap-5 items-center'>
                    {
                        news.map(v => <p key={v._id}>{v.title}</p>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;