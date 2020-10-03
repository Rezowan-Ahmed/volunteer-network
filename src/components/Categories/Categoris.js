import React from 'react';

const Categoris = ({ category }) => {
    const { name, image } = category;
    return (
        //<div className="container">
                <div className="col-md-3">
                    {/* <div className=""> */}
                        <img src={image} alt="" />
                        <h6>{name}</h6>
                    {/* </div> */}
                </div>
           // </div> 
    );
};

export default Categoris;