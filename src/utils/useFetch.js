import { useState, useEffect } from 'react';
import fetch from './fetch';

const useFecth = url => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        fetch(url)
            .then(setData)
            .catch(setError);
    }, []);
    return {
        data,
        error,
        loading: error === undefined && data === undefined
    }
}

export default useFecth;
