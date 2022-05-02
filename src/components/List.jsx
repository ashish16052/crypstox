import React, { useEffect, useState } from 'react';
import Coinrow from './Coinrow';
import { CoinList } from '../components/api';
import axios from 'axios';

const List = () => {

    const [coinList, setCoinList] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get(CoinList());
        setCoinList(data);
        console.log(data);
    }
    
    useEffect(() => {
        fetchData();
    },[])

    return (
        <div className='List'>
            <div className='Coinrow top'>
                <div>Coin</div>
                <div>Price</div>
                <div>%</div>
            </div>
            {coinList.map((data, index) => (
                <Coinrow data={data} key={index} />
            ))}
        </div>
    )
}

export default List