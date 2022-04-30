import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    const navigate = useNavigate();

    const signedSucces = (response) => {
        props.setSigned(true);
        navigate("/dashboard");
        localStorage.setItem("user", JSON.stringify(response.profileObj));
    }

    const signedFail = (response) => {
        props.setSigned(false);
    }

    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_ClientID}
                buttonText="Login"
                onSuccess={signedSucces}
                onFailure={signedFail}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login