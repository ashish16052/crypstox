import React, { useEffect, useState } from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom';

const Coinrow = (props) => {

    const [priceColor, setColor] = useState();

    useEffect(() => {
        Number(props.data.price_change_percentage_24h > 0) ?
            setColor("green") :
            setColor("red");
    }, [props.data])

    return (
        <Link to={"/dashboard/" + props.data.id}>
            <div className='Coinrow'>
                <div>
                    <img src={props.data.image}></img>
                    <div>{props.data.symbol}</div>
                </div>
                <div>₹{props.data.current_price}</div>
                <div className={priceColor}>{props.data.price_change_percentage_24h}</div>
            </div>
        </Link>
    )
}

export default Coinrow