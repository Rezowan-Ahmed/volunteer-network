import React from 'react';
import { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Register.css';

const Register = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div className="register_box">
            <Form className="inside_box">
                <h4>Register as a Volunteer</h4>

                <input type="text" name="name" value={loggedInUser.name} placeholder="Full Name" />
                <input type="text" name="email" value={loggedInUser.email} placeholder="Username or Email" />
                <input type="date" name="date" placeholder="Date" />
                <input type="text" name="description" placeholder="Description" />
                <input type="text" name="category" placeholder="Organize books at the library" />

                <Button variant="primary" type="submit" className="reg_btn">
                    Registration
                </Button>
            </Form>
        </div>
    );
};

export default Register;