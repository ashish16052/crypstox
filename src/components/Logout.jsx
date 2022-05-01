import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {

    const navigate = useNavigate();

    const logoutSuccess = () => {
        localStorage.removeItem("user");
        props.setSigned(false);
        navigate("/");
    }

    return (
        <div className="Logout">
            <GoogleLogout
                clientId={process.env.REACT_APP_ClientID}
                render={renderProps => (
                    <button className="Button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign out</button>

                )}
                buttonText="Signout"
                onLogoutSuccess={logoutSuccess}
            >
            </GoogleLogout>
        </div>
    )
}

export default Logout