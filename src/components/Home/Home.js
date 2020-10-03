import React from 'react';
import Categoris from '../Categories/Categoris';
// import { Button, Form, FormControl } from 'react-bootstrap';
import Header from '../Header/Header';
import './Home.css';
import volunteerCategories from '../../FakeData/volunteerCategories';


const Home = () => {
    return (
        <div className='banner_area'>
            <Header></Header>
            <div className="container">
                <div className="text-search">
                    <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                    <input className='input' type="text" placeholder="search..." />
                    <button className="btn btn-primary btn-search">Search</button>
                </div>

                <div className="row">
                    {
                        volunteerCategories.map(category => <Categoris key={category.id} category={category}></Categoris>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;