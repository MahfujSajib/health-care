import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Services.css'


const Services = () => {
    return (
        <div className="services">
            <h1 className='service mt-5'>Our Services</h1>
            <CardGroup className="our-services">
                <Card className="our-services">
                    <Card.Body>
                        <Card.Title>Neurology Clinic</Card.Title>
                        <Card.Text>
                            Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs are called fellowships, and are one to two years.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="our-services">
                    <Card.Body>
                        <Card.Title>Cardiology Clinic</Card.Title>
                        <Card.Text>
                            All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children and adult heart disease.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="our-services">
                    <Card.Body>
                        <Card.Title>Pathology Clinic</Card.Title>
                        <Card.Text>
                            Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from diagnostic testing and treatment.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>




    );
};

export default Services;