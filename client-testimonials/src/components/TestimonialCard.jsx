import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ name, text }) => {
    return(
    <div className="tC-container">
        <h3> Name: {name} </h3>
        <p>  - {text} </p>
    </div>
    )
}


export default TestimonialCard;