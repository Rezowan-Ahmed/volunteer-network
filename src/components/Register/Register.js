import React from 'react';
import { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Register = () => {
    const {id} = useParams();
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [categoryID , setCategoryID] = useState();
    const [input, setInput] = useState({
        date: '',
        description: ''
    });

    useEffect(() => {
        categoryName()
    }, [])

    const categoryName = async () => {
        await fetch('http://localhost:9010/categories/' + id)
        .then(res => res.json())
        .then(data => setCategoryID(data))
    }

    const {name, image} = categoryID ? categoryID[0] : [];

    const handleRegisterInput = (e) =>{
        const inputValue = {...input}
        if(e.target.name === 'date'){
            inputValue.date = e.target.value;
        }
        if(e.target.name === 'description'){
            inputValue.description = e.target.value;
        }
        setInput(inputValue)
    }

    const handleRegister = (e) => {
        const userInfo = {...loggedInUser};
        userInfo.date = input.date;
        userInfo.description = input.description;
        userInfo.image = image;
        setLoggedInUser(userInfo);
        fetch('http://localhost:9010/addRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(result => result.json())
        .then(data => {
            if(data){
                history.push('/event')
            }
        })

        e.preventDefault();
    }

    return (
        <div className="register_box">
            <Form onSubmit={handleRegister} className="inside_box">
                <h4>Register as a Volunteer</h4>

                <input type="text" name="name" value={loggedInUser.name } placeholder="Full Name" disabled/>
                <input type="text" name="email" value={loggedInUser.email } placeholder="Username or Email" disabled />
                <input onBlur={handleRegisterInput} type="date" name="date" placeholder="Date" />
                <input onBlur={handleRegisterInput} type="text" name="description" placeholder="Description" />
                <input type="text" name="category" value={name} placeholder="Organize books at the library" disabled/>

                <Button variant="primary" type="submit" className="reg_btn">
                    Registration
                </Button>
            </Form>
        </div>
    );
};

export default Register;