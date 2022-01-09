import React from 'react';
import err1 from "../image/error11.png";

const Error404 = () => {
    return (
        <>
           <h1 style={{textAlign: "center", color: "red", margin: "3rem"}}>error404, page does not exist.</h1>
           <img src= {err1} alt="errorImg" style={{margin: "2rem 8rem"}} /> 
        </>
    );
};

export default Error404;
