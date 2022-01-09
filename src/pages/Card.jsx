import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";


const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to ="/contact" className="btn">Check Now</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Card
