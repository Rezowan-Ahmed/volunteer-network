import React from 'react';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Register = () => {
    const {id} = useParams();
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [categoryID , setCategoryID] = useState([]);
    const [input, setInput] = useState({
        date: '',
        description: ''
    });

    useEffect(() => {
        fetch('http://localhost:9010/categories/')
        .then(res => res.json())
        .then(data => setCategoryID(data))
    }, [])

    const categoryData = categoryID.find(cateData => cateData.id == id) || {};
    const {name, image} = categoryData;


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
        userInfo.name = name;
        
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

                <input type="text" value={loggedInUser.username } placeholder="Full Name" disabled/>
                <input type="text"  value={loggedInUser.email } placeholder="Username or Email" disabled />
                <input onBlur={handleRegisterInput} type="date" name="date" placeholder="Date" />
                <input onBlur={handleRegisterInput} type="text" name="description" placeholder="Description" />
                <input type="text" value={name}  placeholder="Organize books at the library" disabled/>

                <input type="submit" name="submit" value="Registration"/>
            </Form>
        </div>
    );
};

export default Register;