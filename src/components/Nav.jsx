import React from 'react';
import ThemeBtn from './ThemeBtn';
import Logout from '../components/Logout';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className="Nav">
      <Link to="/">
        <h2>🪙CrypStox</h2>
      </Link>
      <div className="Navbtns">
      <ThemeBtn />
      {
        props.isSigned ?
          <Logout setSigned={props.setSigned} /> :
          null
      }
      </div>
    </div>
  )
}

export default Nav