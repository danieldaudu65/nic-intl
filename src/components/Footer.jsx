import React from 'react';
import { facebookicon, footer, footerlogo, instagramicon, logo, mixicon, youtubeicon } from '../assets';
import { FaLocationArrow, FaPhone } from 'react-icons/fa';
import { FaLocationPin, FaMessage } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div
      className="bg-cover bg-custom backdrop-blur-xl bg-center p-8 px-6 py-10  flex items-center border-none justify-center"
    >
      <div className="text-white ">
        <div className='text-[#fffa]'>
          <h3 className='font-bold'>GET IN TOUCH</h3>
          <p className='text-[13px] font-light'>Noblesinchristminitriess, Contact us</p>
          <div className='flex gap-8 my-4 items-center'>
            <FaLocationPin className='text-[20px]' />
            <p className='text-[12px]'>NOBLE PAVILLION @PIUS OMOFUMA STREET GT EXTENTION,
              UJEMEN EKPOMA, EDO STATE</p>
          </div>
          <div className='flex gap-8 my-4 items-center'>
            <FaMessage />
            <p className='text-[12px]'> noblechristinfo@gmail.com</p>
          </div>
          <div className='flex gap-8 my-4 items-center'>
            <FaPhone />
            <p className='text-[12px]'>+234 - 703 - 5430 - 287</p>
          </div>
        </div>
        <hr />
        <div className='flex   mt-5 items-center '>
          <img src={footerlogo} className='w-12 h-12 -ml-4' alt="" />
          <p className='text-[8px] '>NOBLE IN CHRIST MINITRIES</p>
        </div>
        <div className='grid grid-cols-2 justify-between py-8'>

          <div className=' flex-col text-[12px] '>
            <div>
              <h4 className='text-white my-4'>Quick Links</h4>
              <div className='flex flex-col gap-4'>
                <a href="#">Giving</a>
                <a href="#">Join us Online</a>
                <a href="#">Branches</a>
                <a href="#">Media</a>
                <a href="#">Our Leaders</a>
              </div>
            </div>
          </div>
          <div className=''>
            <div>
              <h4 className='text-white my-4'>Social Links</h4>
              <div className='text-[8px] flex flex-col gap-4'>
                <div className='flex items-center gap-4 '>
                  <img src={facebookicon} alt="" className='w-3' />
                  <p>Facebook</p>
                </div>
                <div className='flex items-center gap-4 '>
                  <img src={instagramicon} alt="" className='w-3' />
                  <p>Instagram</p>
                </div>
                <div className='flex items-center gap-4 '>
                  <img src={youtubeicon} alt="" className='w-3' />
                  <p>Youtube</p>
                </div>
                <div className='flex items-center gap-4 '>
                  <img src={mixicon} alt="" className='w-3' />
                  <p>Mixlr </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
