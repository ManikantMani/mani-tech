import React from 'react';
import "./index.css";
import hom from "../image/home1.png";
import Common from './Common';


const Home = () => {
    return (
        <>
            <Common
                name="Grow your business with"
                imgsrc={hom}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;
