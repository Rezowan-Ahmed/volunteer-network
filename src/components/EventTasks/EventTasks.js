import React, { useEffect , useState} from 'react';
import './EventTasks.css';
import background from '../../logos/background.jpg';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';
import { UserContext } from '../../App';
import { useContext } from 'react';

const EventTasks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [event, setEvent] = useState([])
    useEffect( () => {
        fetch('http://localhost:9010/volunteerEvents', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                email: loggedInUser.email
            },
        })
        .then(res => res.json())
        .then(data => {
            setEvent(data)
        })
    })

    return (
        <div>
        <Header></Header>
        <div>
            <div className="event_layout">
            <Grid container item xs={12} spacing='5'>
                        <Grid item xs={12} md={6} >
                            <div className="event_box">
                                <div>
                                    <img src={background} alt=""/>
                                </div>
                                <div className="box_text">
                                    <h4>Humanity More</h4>
                                    <h5>29 sep,2020</h5>
                                    <div className="cancel_btn">
                                    <button  className='event-cancel'>
                                        cancel
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
            </Grid>
            </div>
        </div>
        </div>
    );
};

export default EventTasks;