import React from 'react';
import { facebookicon, instagramicon, mixicon, youtubeicon } from '../assets';
import Gallery from '../components/galary';

const Pictures = () => {
    return (
        <div className=' '>
            <h1 className='text-[14px] mx-6  my-16 underline font-bold'>BECOME A PARRT OF OUT LOVING COMMUNITY</h1>

            <div className='bg-[#54130b] py-4  p-6  text-white'>
                <h2 className='font-bold mt-8'>Connect with Nobles in Christ Ministries on any of these Platform</h2>
                <div className='grid grid-cols-2  gap-4 text-black my-8'>
                    <a href="" className='bg-white h-[150px] p-3 flex gap-2 items-center justify-center rounded-lg border'>
                        <img src= {facebookicon} alt="" className='w-[20px]'/>
                        <p>Facebook</p>
                    </a>
                    <a href="" className='bg-white h-[150px] p-3 flex gap-2 items-center justify-center rounded-lg border'>
                        <img src= {instagramicon} alt="" className='w-[20px]'/>
                        <p>Facebook</p>
                    </a>
                    <a href="" className='bg-white h-[150px] p-3 flex gap-2 items-center justify-center rounded-lg border'>
                        <img src= {youtubeicon} alt="" className='w-[20px]'/>
                        <p>Facebook</p>
                    </a>
                    <a href="" className='bg-white h-[150px] p-3 flex gap-2 items-center justify-center rounded-lg border'>
                        <img src= {mixicon} alt="" className='w-[20px]'/>
                        <p>Facebook</p>
                    </a>
                </div>

                <p  className='text-[12px]'>Be a part of our church Family</p>
                <p  className='text-[12px]'>join us today!!</p>
            </div>

            <div className='-=bg-[30F0325]'>
                <Gallery />
            </div>
        </div>
    );
}

export default Pictures;
