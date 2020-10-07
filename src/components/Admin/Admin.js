import React from 'react';
import Header from '../Header/Header';
import {  useState } from 'react';
import { useEffect } from 'react';

const Admin = () => {
    const [registeredEvent, setRegisteredEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9010/allRegisteredEvent')
            .then(res => res.json())
            .then(data => setRegisteredEvent(data))
    }, [])


   
    const deleteAllRegisteredEvent = (id) => {
        fetch('http://localhost:9010/cancelVolunteerEvent', {
            method: 'DELETE',
            headers:{ 
                'Content-Type' : 'application/json',
                id:id
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                const dEvent = registeredEvent.filter(data => data._id !== id)
                setRegisteredEvent(dEvent)
            }
        })
    }

    return (
        <div className="container" >
            <div>
                <Header></Header>
            </div>
            <div style={{ margin: '40px' }}>
                <h2 style={{marginBottom: '15px'}}>Volunteer register list</h2>
                <table class="table">
                    <thead style={{ background: '#F5F6FA', borderRadius: '13px' }}>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Registating date</th>
                            <th scope="col">Volunteer list</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registeredEvent.map((allEvent) =>
                                <tr>
                                    <td>{allEvent.username}</td>
                                    <td>{allEvent.email}</td>
                                    <td>{allEvent.date}</td>
                                    <td>{allEvent.name}</td>
                                    <td onClick={() => deleteAllRegisteredEvent(allEvent._id)} style={{ background: 'red', color: 'white', textAlign: 'center', cursor: 'pointer' }}>delete</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;