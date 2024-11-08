import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import './Doctor.css';
import AppointmentCard from './AppointmenCard';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';

const doctors = [
    {
        value: 'doctorA',
        label: 'Doctor A',
        image: 'https://www.okusanpix.com/wp-content/uploads/2019/09/Kanchanit-shared-a-drawing-with-you-5.png',
    },
    {
        value: 'doctorB',
        label: 'Doctor B',
        image: 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-cartoon-doctor-medical-worker-png-image_1158134.jpg',
    },
    {
        value: 'doctorC',
        label: 'Doctor C',
        image: 'https://img.lovepik.com/free-png/20210924/lovepik-cartoon-doctor-png-image_401328360_wh1200.png',
    },
];

function Doctor() {
    const navigate = useNavigate();
    const timeSlots = [
        "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30",
        "11:45", "12:00", "12:15", "12:30", "12:45"
    ];
    const [doctorImage, setDoctorImage] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            doctorname: 'นายเเพทย์เอ',
            name: 'ภัทราพร ชัยเพชร์',
            service: 'รักษารากฟัน',
            number: '6400001',
            patient: '6400001 | จรูณ ทดสอบ1',
            phone: '092-485-3486',
            time: '12:00-12:45',
            image: 'https://www.okusanpix.com/wp-content/uploads/2019/09/Kanchanit-shared-a-drawing-with-you-5.png',
            doctor: 'doctorA',
        },
        {
            id: 4,
            doctorname: 'นายเเพทย์เอ',
            name: 'ภัทราพร สอนชัย',
            service: 'รักษาขา',
            number: '6400002',
            patient: '6400001 | จรูณ ทดสอบ2',
            phone: '092-485-3486',
            time: '11:00-11:30',
            image: 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-cartoon-doctor-medical-worker-png-image_1158134.jpg',
            doctor: 'doctorB',
        },
        {
            id: 2,
            name: 'นายบี',
            service: "อุดฟัน",
            number: '6400003',
            patient: '6400002 | จรัญ ทดสอบ3',
            time: '13:00-14:00',
            phone: '093-444-7777',
            image: 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-cartoon-doctor-medical-worker-png-image_1158134.jpg',
            doctor: 'doctorB',
        },
        {
            id: 3,
            name: 'ภัทรพล',
            service: 'ขูดหินปูน',
            number: '6400003',
            patient: '6400003 | จำเริญ ทดสอบ4',
            time: '10:00-10:15',
            phone: '094-555-6666',
            image: 'https://img.lovepik.com/free-png/20210924/lovepik-cartoon-doctor-png-image_401328360_wh1200.png',
            doctor: 'doctorC',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const parseTime = (time) => {
        const [start] = time.split('-');
        const [hour, minute] = start.split(':').map(Number);
        return hour * 60 + minute;
    };

    const filteredAppointments = appointments
        .filter((appt) => appt.doctor === selectedDoctor.value)
        .sort((a, b) => parseTime(a.time) - parseTime(b.time));

    const handleAppointmentClick = (appointment) => {
        console.log(appointment)
        setSelectedAppointment(appointment);
        const doctor = doctors.find(doc => doc.value === appointment.doctor);   // เมื่อเปิด Modal ขึ้นมา อันนี้ไว้ใช้ หารูปของหมอ
        setDoctorImage(doctor?.image);
        setShowModal(true); // เปิด
    };

    const closeModal = () => {
        setShowModal(false); // ปิด Modal
    };


    const customStyles = {
        option: (provided) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
        }),
        singleValue: (provided) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
        }),
    };

    const formatOptionLabel = ({ label, image }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
                src={image}
                alt={label}
                style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 10 }}
            />
            <span>{label}</span>
        </div>
    );
    const selectedImage = filteredAppointments[0]?.image || "https://via.placeholder.com/150";



    const ClickToGoQueue = () => {
        navigate('/queue');
    };

    return (
        <div className="app">
            <header>
                <Select
                    value={selectedDoctor}
                    onChange={setSelectedDoctor}
                    options={doctors}
                    styles={customStyles}
                    formatOptionLabel={formatOptionLabel}
                    placeholder="Select or Search Doctor"
                    className='search-bar'
                />
                <button className='goclick' onClick={ClickToGoQueue} >Queue</button>
            </header>

            <div className="schedule-table">
                <div className="header-doctor">
                    <span style={{ marginLeft: '10px' }}>ทันตแพทย์</span>
                    <img src={selectedImage} alt="Doctor" style={{ width: 50, height: 50, borderRadius: '50%', marginRight: '10px' }} />
                </div>
                <div className="header-bomttom-doctor"> <FontAwesomeIcon icon={faClock} style={{ marginRight: 10 }} /> เวลาเข้าทำงาน 09:00 - 19:00 น. </div>
                <div className="slots">
                    {timeSlots.map((time, index) => {
                        const appointmentAtThisSlot = filteredAppointments.find(appt => appt.time.startsWith(time));
                        return (
                            <div key={index} className="time-slot">
                                <span className="time">{time}</span>
                                <div className="bar"></div>
                                {appointmentAtThisSlot && (
                                    <AppointmentCard
                                        appointment={appointmentAtThisSlot}
                                        onClick={() => handleAppointmentClick(appointmentAtThisSlot)}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {showModal && selectedAppointment && (
                <Modal
                    appointment={selectedAppointment}
                    doctorImage={doctorImage}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default Doctor;
