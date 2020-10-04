import React from 'react';
import Categoris from '../Categories/Categoris';
import Header from '../Header/Header';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';


const Home = () => {
    const[category, setCategory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9010/categories')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])


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
                        category.map(category => <Categoris key={category.id} category={category}></Categoris>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;