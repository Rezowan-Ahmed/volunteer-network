import React from 'react';
// import { Button, Form, FormControl } from 'react-bootstrap';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className='banner_area'>
            <Header></Header>
            <div className="text-search">
                <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                <input className='input' type="text" placeholder="search..."/>
                <button className="btn btn-primary btn-search">Search</button>
            </div>
        </div>
    );
};

export default Home;