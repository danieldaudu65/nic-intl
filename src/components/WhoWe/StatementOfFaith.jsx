import React from 'react';
import { statemnets } from '../../constant';

const StatementOfFaith = () => {
  return (
    <div>
      <h2>STATEMENT OF FAITH</h2>
      <div>
        {
          statemnets  .map((item, index) =>(
            <li className=' flex items-center gap-1'>
                <strong>{item.no}</strong>
                <p>{item.statement}</p>
            </li>
          ))
        }
      </div>
    </div>
  );
}

export default StatementOfFaith;
