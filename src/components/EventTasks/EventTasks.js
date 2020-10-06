import React, { useEffect , useState} from 'react';
import './EventTasks.css';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';
import { UserContext } from '../../App';
import { useContext } from 'react';

const EventTasks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [event, setEvent] = useState([])

    useEffect( () => {
        fetch('http://localhost:9010/volunteerEvents?email=' + loggedInUser.email) 
           
        .then(res => res.json())
        .then(data => {
            setEvent(data)
        })
    }, [event])

    // function deleteEvent(id) {
    //     fetch(`http://localhost:9010/cancelVolunteerEvent/${id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(data => {console.log(data)
    //         Number(data)
    //     })
    // }

    const deleteEvent = (id) => {
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
                const dEvent = event.filter(data => data._id !== id)
                setEvent(dEvent)
            }
        })
    }

    return (
        <div>
        <Header></Header>
        <div>
            <div className="event_layout">
            <Grid container item xs={12} spacing='5'>
                        {
                            event.map(eventData => 
                                <Grid item xs={12} md={6} >
                            <div className="event_box">
                                <div>
                                    <img src={eventData.image} alt=""/>
                                </div>
                                <div className="box_text">
                                    <h4>{eventData.name}</h4>
                                    <h5>{eventData.date}</h5>
                                    <div className="cancel_btn">
                                    <button onClick={() => deleteEvent(`${eventData._id}`)}  className='event-cancel'>
                                        cancel
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                                )
                        }
            </Grid>
            </div>
        </div>
        </div>
    );
};

export default EventTasks;