import React from 'react';
import { churchmedia, GeandFam } from '../../assets';

const Leadership = () => {
    return (
        <div>
            <div>
                <p>01 Leadership</p>
                <img src={churchmedia} alt="" />
            </div>
            <div>
                <img src={GeandFam} alt="" />
                <p>Senior Pastor & Family</p>
            </div>
            <div>
                <p>Rev'd Austin & Rev'd Blessed Iyere</p>
            </div>
        </div>
    );
}

export default Leadership;
