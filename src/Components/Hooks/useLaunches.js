import {useEffect, useState} from 'react';
import GetData from "../../getdata/GetData";

const getData = new GetData();

const useLaunches = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData.getLaunches()
            .then(launches => setData(state => [...launches]));
    }, [])

    const getLaunch = id => data.find(item => item.id === id);

    return{ data, getLaunch }
}

export default useLaunches;