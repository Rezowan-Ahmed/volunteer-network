import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Register.css';

const Register = () => {
    return (
        <div className="register_box">
            <Form className="inside_box">
                <h4>Register as a Volunteer</h4>
                <Form.Group>
                    <Form.Control className="input" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                    <Form.Control className="input" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group>
                    <Form.Control className="input" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group>
                    <Form.Control className="input" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group>
                    <Form.Control className="input" type="password" placeholder="Password" />
                </Form.Group>
            
                <Button variant="primary" type="submit" className="reg_btn">
                    Registration
                </Button>
            </Form>
        </div>
    );
};

export default Register;