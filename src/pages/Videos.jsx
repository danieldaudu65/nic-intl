import React from 'react';
import { videos } from '../constant';

const Videos = () => {
  return (
    <div className='p-6 '>
      <h1 className='font-bold text-[20px] underline '>VIDEO SERMONS</h1>

      {
        videos.map((item, index) => (
            <div className=' border p-3 rounded-lg mb-8 shadow-lg my-6' key={index}>
                <p className='text-[10px] mb-2'>{item.videolink}</p>
                <img className='mb-4' src= {item.image} alt="" />
                <p className='underline font-bold text-[10px]'>{item.title}</p>
                <p>{item.preacher}</p>
            </div>
        ))
      }
    </div>
  );
}

export default Videos;
