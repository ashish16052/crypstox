import React from 'react';
import GoogleLogin from 'react-google-login';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    const navigate = useNavigate();

    const signedSucces = (response) => {
        navigate("/dashboard");
        props.setSigned(true);
        localStorage.setItem("user", JSON.stringify(response.profileObj));
    }

    const signedFail = (response) => {
        navigate("/");
        props.setSigned(false);
        console.log(response);
    }

    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_ClientID}
                render={renderProps => (
                    <button className="Button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in</button>
                    
                )}
                buttonText="Sign in"
                onSuccess={signedSucces}
                onFailure={signedFail}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login