import React from 'react';
import { FaCopy } from 'react-icons/fa';

const Giving = () => {
    return (
        <div>
            <h2>GIVING</h2>
            <p>"So let each one give as he purposes in his heart,
                not grudgingly or of necessity; for God loves a cheerful giver" - 2 Cor. 9:7
            </p>

            <div>
                <h4>Local <strong>Payments</strong></h4>
                <p>Giving is more than just an action—it is a profound expression of love and faith.
                    Your generosity fuels our ministries, enabling us to impact lives both locally and globally.
                    <br />
                    For those within Nigeria, we provide various secure and convenient local payment options to make your giving seamless and stress-free.
                </p>
            </div>

            <div className=''>
                <div>
                    <p>Bank</p>
                    <p>United Bank Of AFrica</p>
                </div>
                <div>
                    <p>Acount Name</p>
                    <p>NOBLE IN CHRIST MINITRIES</p>
                </div>
                <div>
                    <p>Acount Number</p>
                    <div>
                        <p>2102141508</p>
                        <FaCopy />
                    </div>
                </div>
            </div>

            <div>
                <h2>Internamtional Pauments</h2>
                <div>

                    <div>
                        <p>Give USD</p>
                        <div>
                            <p>1013150489</p>
                            <FaCopy />
                        </div>
                        <p>Key Stone Bank</p>
                        <p>Noble In Christ Ministry</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <h3>Becoma A PARTNER</h3>
                <p>Your generosity is the heartbeat of our ministry, pumping life and energy into our efforts to serve others.
                    By giving, you demonstrate your love and faith, and help us to extend our ministry's impact both near and far.</p>

                <div className=''>
                    <div>
                        <p>Bank</p>
                        <p>Key Stone Bank</p>
                    </div>
                    <div>
                        <p>Acount Name</p>
                        <p>NOBLE IN CHRIST MINITRIES</p>
                    </div>
                    <div>
                        <p>Acount Number</p>
                        <div>
                            <p>1012489193</p>
                            <FaCopy />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Giving;
