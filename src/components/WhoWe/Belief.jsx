import React from 'react';
import { belief } from '../../constant';
import { picture } from '../../assets';

const Belief = () => {
    return (
        <div>
            <h2>BELIEF & VALUE</h2>
            <p>Our belief are deeply rooted in the Bible and teachings of Christ.</p>

            <div>
                {
                    belief.map((item, index) => (
                        <li key={index} className='flex flex-col'>
                            <div className='underline'>{item.title}</div>
                            <p>{item.text}</p>
                        </li>
                    ))
                }
            </div>


            <img src= {picture} alt="" />
        </div>
    );
}

export default Belief;
