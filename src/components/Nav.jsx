import React from 'react';
import ThemeBtn from './ThemeBtn';
import Logout from '../components/Logout';
import { Link } from 'react-router-dom';

const Nav = (props) => {

  var username = "";
  var userpic = "";
  if (localStorage.getItem("user")) {
    username = JSON.parse(localStorage.getItem("user")).name;
    userpic = JSON.parse(localStorage.getItem("user")).imageUrl;
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
              <img className='avatar' src={userpic}></img>
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