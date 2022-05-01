import React from 'react'
import Login from '../components/Login';
import illustration from '../assets/illustration.svg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = (props) => {

  return (
    <div className='Home'>
      <img src={illustration} className="illustration" />
      <div className='content'>
        <h1>Best Platform for Tracking Crypto and Stocks</h1>
        <p>View the latest prices and charts of top cryptocurrencies and Stocks all at one </p>
        {
          props.isSigned ?
            <Link to="/dashboard">
              <Button text="Dashboard" />
            </Link> :
            <Login setSigned={props.setSigned} />
        }
      </div>
    </div>
  )
}

export default Home