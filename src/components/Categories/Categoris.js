import React from 'react';

const Categoris = ({ category }) => {
    const { name, image } = category;
    return (
                <div className="col-md-3">
                        <img style={{ width: '270px', height: '320px', borderRadius:'10px'}} src={image} alt="" />
                        <h6 style={{background: 'orange', height: '24px', textAlign:'center' }}>{name}</h6>
                </div>
    );
};

export default Categoris;