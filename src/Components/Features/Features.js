import React from "react";
import './Features.css'
import falcon1 from '../../img/falcon-1.png'
import falcon9 from '../../img/falcon-9.png'
import falconHeavy from '../../img/falcon-heavy.png'
import starship from '../../img/starship.png'
import RellaxWrapper from "react-rellax-wrapper";
import Main from "../Main/Main";


const rocketImage = {
    'Falcon 1': falcon1,
    'Falcon 9': falcon9,
    'Falcon Heavy': falconHeavy,
    'Starship': starship,
}

const Features = ({rocketFeatures, rocketName}) => {

    return (
        <>
            <Main rocketName={rocketName} />
            <section className="features">
                <h2 className="features-title">
                    {rocketName} <br/>Overview
                </h2>
                <div className="overview">

                    <table className="table">
                        <caption className="table-title">
                            Size
                        </caption>
                        <thead>
                        <tr>
                            <td className="table-column">HEIGHT</td>
                            <td className="table-column">
                                {rocketFeatures.height.meters} m / {rocketFeatures.height.feet} ft
                            </td>
                        </tr>
                        <tr>
                            <td className="table-column">DIAMETER</td>
                            <td className="table-column">
                                {rocketFeatures.diameter.meters} m / {rocketFeatures.diameter.feet} ft
                            </td>
                        </tr>
                        <tr>
                            <td className="table-column">MASS</td>
                            <td className="table-column">
                                {rocketFeatures.mass.kg} kg / {rocketFeatures.mass.lb} lb
                            </td>
                        </tr>
                        <tr>
                            <td className="table-column">PAYLOAD TO LEO</td>
                            <td className="table-column">
                                {rocketFeatures.payload_weights[0].kg} kg / {rocketFeatures.payload_weights[0].lb} lb
                            </td>
                        </tr>
                        </thead>
                    </table>
                    <RellaxWrapper speed={14}>
                        <img
                            src={rocketImage.hasOwnProperty(rocketName) ? rocketImage[rocketName] : rocketImage.other}
                            alt="rocket"
                            className="rocket"
                        />
                    </RellaxWrapper>
                    <article>
                        <h3 className="features-subtitle">DESCRIPTION</h3>
                        <p className="features-text">
                            {rocketFeatures.description}
                        </p>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Features;
