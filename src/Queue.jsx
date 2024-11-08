import React from 'react';
import './Queue.css';


function Queue() {

    return (
        <>

            <div className="container">
                <div className="date"><strong>วันที่ 30 ม.ค. 2564</strong></div>


                <div className="block">
                    <div className="header-queue">
                        <div className='text'>ห้องพิเศษ</div>
                    </div>
                </div>

                <div className="block">
                    <div className="header-queue">
                        <div className='text'>แอดมิน (1)</div>
                    </div>
                    <div className="card">
                        <div className="card-item">
                            <img
                                src="https://www.okusanpix.com/wp-content/uploads/2019/09/Kanchanit-shared-a-drawing-with-you-5.png"
                                alt=""
                                style={{ width: 50, marginBottom: '8px', height: 40 }}
                            />
                            <div className='position-text'>
                                <p style={{ marginBottom: '5px' }}>ภัทราพร สอนชัย</p>
                                <p style={{ marginTop: '10px' }}>6400002</p></div>
                        </div>
                        <div className='date-timeinqueue'>7วัน</div>
                    </div>
                </div>

                <div className="block-checkout">
                    <div className="header-queue">
                        <div className='text'>จุดชำระเงิน (1)</div>
                    </div>
                    <div className="card">
                        <div className="card-item">
                            <img
                                src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-cartoon-doctor-medical-worker-png-image_1158134.jpg"
                                alt=""
                                style={{ width: 50, marginBottom: '8px', height: 40 }}
                            />
                            <div className='position-text'>
                                <p style={{ marginBottom: '5px' }}>ภัทราพร ชัยเพชร์</p>
                                <p style={{ marginTop: '10px' }}>6400001</p></div>
                        </div>
                        <div className='date-timeinqueue'>9วัน</div>

                    </div>
                </div>
                <div className="header-bar">
                    <div className="total-income">รายได้ทั้งหมด 0.00 บาท</div>
                    <button className="refresh-button">⟳</button>
                </div>
            </div>
        </>
    );
}

export default Queue;
