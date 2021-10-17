import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Doctor.css'

const Doctor = (props) => {
    const { name, speciality, studyBackground, img } = props.doctor
    return (

        <div className="our-doctors">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <h4>{speciality}</h4>
                    <Card.Text>
                        {studyBackground}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Doctor;