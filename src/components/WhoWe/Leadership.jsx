import React from 'react';
import { churchmedia, GeandFam } from '../../assets';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Leadership = () => {

    const navigate = useNavigate()
    return (
        <div>

            {/* <img src= {churchmedia} alt="" /> */}
            <div>
                <img src={churchmedia} alt="" />
            </div>
            <div>
                <p>01 Leadership</p>
                <img src={GeandFam} alt="" />
                <p>Senior Pastor & Family</p>
            </div>
            <div>
                <p>Rev'd Austin & Rev'd Blessed Iyere</p>
                <p>
                    With nearly two decades of impactful ministry, Reverend Austin Iyere Wonders has been tirelessly preaching the gospel of Christ, accompanied by miracles, signs, and wonders. As the Lead Pastor of Noble In Christ Ministries, he operates under a powerful teaching, healing, and prophetic anointing. <br />
                    Through a growing Apostolic ministry, Reverend Austin has established, nurtured, and strengthened numerous local churches, leaving a lasting legacy of faith and discipleship. <br />
                    He is joyfully married to Reverend Blessed Iyere, who serves as the Vice President and Co-Lead Pastor of the ministry. Together, they are blessed with two adorable children, Bethel and Elora, who are a testament to their godly heritage.
                </p>

                <button onClick={ ()=> navigate('leaders')}>See all Leaders <FaArrowRight /> </button>
            </div>
        </div>
    );
}

export default Leadership;
