import React from 'react';
import { members } from '../../assets';
import { FaArrowRight } from 'react-icons/fa6';

const BecomeAMember = () => {
    return (
        <div>
            <p>God has called us not only to believe in Jesus, but to belong in
                local churches for our overall growth and edification. Noble in Christ
                Ministries is a church that you can call home. You will be taught
                the Word of God, ministered to in the power of the Holy Spirit,
                trained for the work of ministry and you'll find a household  of
                like-minded believers Enrol  in our Membership Class today
                (in any of our locations) and begin your membership journey
            </p>
            <button><p>Location Near me</p> <FaArrowRight /></button>

            <img src={members} alt="" />
        </div>
    );
}

export default BecomeAMember;
