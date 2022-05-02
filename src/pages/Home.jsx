import React from 'react'
import Login from '../components/Login';
import illustration from '../assets/illustration.svg';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = (props) => {

  return (
    <div className='Home'>
      <img src={illustration} className="illustration" />
      <div class="blob"></div>
      <div className='content'>
        <h1>Best Platform for Tracking Crypto Trends and Price</h1>
        <p>View the latest prices and charts of top cryptocurrencies at one place </p>
        {
          props.isSigned ?
            <Link to="/dashboard">
              <Button text="Dashboard"/>
            </Link> :
            <Login setSigned={props.setSigned} />
        }
      </div>
    </div>
  )
}

export default Home