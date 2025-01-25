import React from 'react';
import { service1, service2, service3 } from '../../assets';

const Programs = () => {
  return (
    <div className=' flex justify-center items-center flex-col gap-8 py-12'>
      <img src= {service1} alt=""  className='w-[80%]'/>
      <img src= {service2} alt=""  className='w-[80%]'/>
      <img src= {service3} alt="" className='w-[80%]' />
    </div>
  );
}

export default Programs;
