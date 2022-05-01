import React from 'react';
import ThemeBtn from './ThemeBtn';
import Logout from '../components/Logout';
import { Link } from 'react-router-dom';

const Nav = (props) => {

  var username = "";
  if (localStorage.getItem("user")) {
    username = JSON.parse(localStorage.getItem("user")).name;
  }

  return (
    <div className="Nav">
      <Link to="/">
        <h2>🪙CrypStox</h2>
      </Link>
      <div className="Navbtns">
        {
          props.isSigned ?
            <div className="Navuser">
              Hello {username}
              <Logout setSigned={props.setSigned} />
            </div> :
            null
        }
        <ThemeBtn />
      </div>
    </div>
  )
}

export default Nav