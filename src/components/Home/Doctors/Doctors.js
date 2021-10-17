import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h1 className="doctors">Our Doctors</h1>
            <div className='d-flex justify-content-center'>
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;