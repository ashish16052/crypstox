import React from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom';

const Coinrow = (props) => {
    return (
        <Link to={"/dashboard/" + props.data.id}>
            <div className='Coinrow'>
                <img src={props.data.image}></img>
                <div>{props.data.name}</div>
                <div>{props.data.current_price}</div>
                <div>{props.data.price_change_percentage_24h}</div>
            </div>
        </Link>
    )
}

export default Coinrow