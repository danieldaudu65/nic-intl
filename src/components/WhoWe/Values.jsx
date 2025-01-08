import React from 'react';
import { core_values } from '../../constant';

const Values = () => {
  return (
    <div>
      <h3>OUR CORE VALUES</h3>
      <ul>
        {
            core_values.map((value, index) =>(
                <li key={index} className='flex gap-3 list-disc '>
                    <strong> {value.no}</strong> 
                    {value.value}
                </li>
            ))
        }
      </ul>
    </div>
  );
}

export default Values;
