import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import useLaunches from "../Hooks/useLaunches";
import YouTube from "react-youtube";
import './Detales.css'
import Main from "../Main/Main";


const Details = (props) => {

    const [launch, setLaunch] = useState(null);

    const {getLaunch} = useLaunches();

    useEffect(() => {
        setLaunch(getLaunch(props.match.params.id));
    }, [getLaunch]);

    const history = useHistory();

    if(!launch) return<div>Загрузка</div>

    return (
        <>
            <Main name={launch.name}/>
            <main className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image" style={{width: '21%', display: 'inline-block'}}>
                            <img src={launch.links.patch.small} alt={launch.name} />
                        </div>
                        <div className="details-content" style={{width: '27%', display: 'inline-block'}}>
                            <p className="details-description">{launch?.details}</p>
                        </div>
                    </div>
                    <div>
                        <YouTube className='details-youtube' videoId={launch.links.youtube_id}/>
                    </div>
                </div>
                <a onClick={history.goBack} className="button button-back">go back</a>
            </main>
        </>
    )
}


export default Details;