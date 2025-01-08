import React from 'react';
import { all_pastors } from '../constant';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Leaders = () => {
    return (
        <div>
            <div className=''>
                <h2 className=''>Meet Our Leaders</h2>
                <p>
                    Rev’d Austin & Rev’d Blessed Iyare
                    <br />
                    With nearly two decades of impactful ministry, Reverend Austin Iyere Wonders has been tirelessly preaching the gospel of Christ, accompanied by miracles, signs, and wonders. As the Lead Pastor of Noble In Christ Ministries, he operates under a powerful teaching, healing, and prophetic anointing.
                    Through a growing Apostolic ministry, Reverend Austin has established, nurtured, and strengthened numerous local churches, leaving a lasting legacy of faith and discipleship.
                    He is joyfully married to Reverend Blessed Iyere, who serves as the Vice President and Co-Lead Pastor of the ministry. Together, they are blessed with two adorable children, Bethel and Elora, who are a testament to their godly heritage.
                </p>

                {
                    all_pastors.map((item, index) => (
                        <div
                            key={index}
                            className=''
                        >

                            <div>
                                <p>Connect with {item.name}</p>
                                <a href= {`${item.instagram}`}>
                                    <FaInstagram />
                                </a>
                                <a href= {`${item.facebook}`}>
                                    <FaFacebook />
                                </a>
                            </div>
                            <img src={item.image} alt="" />
                            <div>
                                <p>{item.name}</p>
                                <p>{item.branch}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Leaders;
