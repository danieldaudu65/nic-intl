import React from 'react';
import { missions, visions } from '../../constant';

const Mission = () => {

  return (
    <div>
      <div>
        <p>Our Mission</p>
        <ul>
          {
            missions.map((misson, index) => (
              <li className='flex items-center gap-3' key={index}>
                <strong>{misson.no}</strong>
                <p>{misson.mission}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <ul>
          {
            visions.map((vision, index) => (

              <li key={index} className='flex items-center gap-3'>
                <strong>{vision.no}</strong>
                <p>{vision.vision}</p>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  );
}

export default Mission;
