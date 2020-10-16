import React from "react";
import './Main.css'

import earthVideo from '../../video/earth.mp4';
import marsVideo from '../../video/mars.mp4';
import moonVideo from '../../video/moon.mp4';
import spaceVideo from '../../video/space.mp4';

const video = {
    'Falcon 1': moonVideo,
    'Falcon 9': earthVideo,
    'Falcon Heavy': marsVideo,
    other: spaceVideo,
}

const Main = ({rocketName, name}) => {

    return (
        <section className="main">
            <h1 className="title">
                {rocketName ? rocketName: name}
            </h1>
            {rocketName && <div className="video-container">
                <video
                    className="video"
                    autoPlay
                    loop
                    muted
                    src={video.hasOwnProperty(rocketName)? video[rocketName] : video.other} />
            </div>}
        </section>
    )
}

export default Main;