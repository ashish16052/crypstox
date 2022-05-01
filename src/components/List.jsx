import React, { useEffect, useState } from 'react';
import Coinrow from './Coinrow';
import { TrendingCoins } from '../components/api';
import axios from 'axios';

const List = () => {

    const [coinList, setCoinList] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get(TrendingCoins());
        setCoinList(data);
        console.log(data);
    }
    
    useEffect(() => {
        fetchData();
    },[])

    return (
        <div className='List'>
            {coinList.map((data, index) => (
                <Coinrow data={data} key={index} />
            ))}
        </div>
    )
}

export default List