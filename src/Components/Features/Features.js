import React from "react";
import './Features.css'
import falcon1 from '../../img/falcon-1.png'
import RellaxWrapper from "react-rellax-wrapper";

const Features = () => {
    return (
        <section className="features">
            <h2 className="features-title">
                Falcon 1 <br/>Overview
            </h2>
            <div className="overview">

                <table className="table">
                    <caption className="table-title">
                        Size
                    </caption>
                    <thead>
                    <tr>
                        <td className="table-column">HEIGHT</td>
                        <td className="table-column">22.25 m / 73 ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">DIAMETER</td>
                        <td className="table-column">1.68 m / 5.5 ft</td>
                    </tr>
                    <tr>
                        <td className="table-column">MASS</td>
                        <td className="table-column">30,146 kg / 66,460 lb</td>
                    </tr>
                    <tr>
                        <td className="table-column">PAYLOAD TO LEO</td>
                        <td className="table-column">450 kg / 992 lb</td>
                    </tr>
                    </thead>
                </table>
                <RellaxWrapper speed={14}>
                    <img
                        src={falcon1}
                        alt="rocket"
                        className="rocket"
                    />
                </RellaxWrapper>
                <article>
                    <h3 className="features-subtitle">DESCRIPTION</h3>
                    <p className="features-text">
                        The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX
                        during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed
                        liquid-fuel launch vehicle to go into orbit around the Earth.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Features;