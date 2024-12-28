import React from 'react';
import { pasaus } from '../../assets';

const Welcome = () => {
  return (
    <div className='bg-[#0F0325] text-white'>
      <h3>A Household United in Reavealing God's Love</h3>
      <p>
        You are welcome to Noble in Christ Ministries (NIC) a vibrant church headquartered in the city of Benin, Edo State, Nigeria. We are on a mission to  disciple our community into a spiritual and personal relationship with our Lord Jesus Christ through the message of his love (finished works of Christ)
        to be a training ground for those who will carry out the other arms/goals of the general ministry (NOBLE IN CHRIST)
      </p>

      <img src= {pasaus} alt="" />
    </div>
  );
}

export default Welcome;
