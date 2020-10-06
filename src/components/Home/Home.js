import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [category, setCategory] = useState([]);
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
                        category.map((category) => 
                            <div className="col-md-3">
                                
                                <Link to={`/register/${category.id}`} >
                                    <img style={{ width: '270px', height: '320px', borderRadius: '10px' }} src={category.image} alt="" />
                                    <h6 style={{ background: 'orange', height: '24px', textAlign: 'center' }}>{category.name}</h6>
                                    </Link>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;