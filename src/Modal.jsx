
import React from 'react';
import './Modal.css';

function Modal({ appointment, onClose, doctorImage }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <div className='infodoctor'>
                    <h1>นัดหมาย</h1>
                    <h3>{appointment.doctorname}</h3>

                </div>
                {doctorImage && (
                    <img
                        src={doctorImage}
                        alt="Doctor"
                        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
                    />
                )}

                <p><strong>ชื่อ : </strong> {appointment.name}</p>
                <p><strong>บริการ :</strong> {appointment.service}</p>
                <p><strong>คนไข้ : </strong> {appointment.patient}</p>
                <p><strong>เบอร์โทรศัพท์ :</strong> {appointment.phone}</p>
                <p><strong>เวลานัด : </strong> {appointment.time}</p>
            </div>
        </div>
    );
}

export default Modal;
