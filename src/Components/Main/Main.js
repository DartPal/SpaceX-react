import React from "react";
import moon from "../../video/moon.mp4";
import './Main.css'

const Main = (props) => {

    return (
        <section className="main">
            <h1 className="title">
                {props.rocketName}
            </h1>
            <div className="video-container">
                <video className="video" autoPlay loop muted src={moon}/>
            </div>
        </section>
    )
}

export default Main;