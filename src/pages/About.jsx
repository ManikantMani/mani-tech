import React from 'react';
import "./index.css";
import hom from "../image/about1.png";
import Common from './Common';


const About = () => {
    return (
        <>
            <Common
                name="Welcome to About page "
                imgsrc={hom}
                visit="/contact"
                btname="Contact Now"
            />
        </>
    );
};

export default About;
