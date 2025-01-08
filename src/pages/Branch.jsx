import React from 'react';
import { branches } from '../constant';

const Branch = () => {
  return (
    <div>
      <div>
        <h1>EXPLORE OUTa BRANCHES</h1>
        <p>Check for NIC Brnach closest to You.</p>
      </div>

      <div>
        {
            branches.map((item, index) =>(
                <div className=''
                 key={index}
                >
                    <h4>{item.location}</h4>

                    <p>{item.street}</p>

                    <div>
                        PHONE: {item.phone}
                    </div>
                </div>
            ))
        }
      </div>

      <div className='bg-black'>
        <h3>Can't find a worship center near you ?</h3>
        <p>Please select any of the regions to woship with us at any of our branches</p>

        <button>Join Us Onine</button>
      </div>

    </div>
  );
}

export default Branch;
