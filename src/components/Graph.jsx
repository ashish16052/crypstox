import React, { useEffect, useState } from 'react';
import { SingleCoin } from '../components/api';
import axios from 'axios';

const Graph = (props) => {

    console.log(props.coin);

    if (props.coin.id) {
        return (
            <div className='Graph'>
                <img src={props.coin.image.small}></img><br></br>
                {props.coin.id}<br></br>
                {props.coin.market_data.current_price.inr}<br></br>
                {props.coin.market_data.market_cap.inr}
            </div>
        )
    }
    else {
        return null;
    }
}

export default Graph