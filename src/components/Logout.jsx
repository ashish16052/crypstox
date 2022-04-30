import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {

    const navigate = useNavigate();

    const logoutSuccess = () => {
        alert("logged out");
        localStorage.removeItem("user");
        props.setSigned(false);
        navigate("/");
    }

    return (
        <div>
            <GoogleLogout
                clientId={process.env.REACT_APP_ClientID}
                buttonText="Logout"
                onLogoutSuccess={logoutSuccess}
            >
            </GoogleLogout>
        </div>
    )
}

export default Logout