import React from 'react'
import mandala_design1 from "./Images/mandala_design1.png";

function Loading() {

    return (
        <div className="loading-div">
            <div className="logo-container">
                <img className="app-logo" src={mandala_design1} alt="Card cap" />
            </div>
        </div>
    )
}

export default Loading
