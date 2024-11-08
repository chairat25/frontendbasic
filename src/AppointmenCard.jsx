import React from 'react';
import './AppointmenCard.css';

function AppointmentCard({ appointment, onClick }) {
    return (
        <table>
            <thead>

            </thead>
            <tbody>
                <div className="appointment-card" onClick={onClick} style={{ cursor: 'pointer' }}>
                    <div className="appointment-details">
                        <p>{appointment.name} | {appointment.service} | {appointment.number}</p>{appointment.phone}
                        | {appointment.time}
                    </div>
                </div>

            </tbody>
        </table>

    );
}

export default AppointmentCard;
