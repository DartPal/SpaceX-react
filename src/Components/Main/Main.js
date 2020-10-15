import React from "react";
import './Main.css'

const video = {
    'Falcon 1': 'moon',
    'Falcon 9': 'earth',
    'Falcon Heavy': 'mars',
    other: 'space',
}

const Main = ({rocketName}) => {

    return (
        <section className="main">
            <h1 className="title">
                {rocketName}
            </h1>
            <div className="video-container">
                <video
                    className="video"
                    autoPlay
                    loop
                    muted
                    src={`../../video/${video.hasOwnProperty(rocketName)? video[rocketName] : video.other}.mp4`} />
            </div>
        </section>
    )
}

export default Main;