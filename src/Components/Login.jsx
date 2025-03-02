import React from "react";

const Login = (props) => {
    return (
        <div className="outerLogin">
            <div className="loginImg">
                {/* <img src="https://s.france24.com/media/display/0e69136e-e78e-11ee-afac-005056bfb2b6/w:1280/p:16x9/main_%C3%A9lections_inde.png" alt="Login Image" /> */}
            </div>
            <div className="login-container">
                <div className="borderLogin"><h1 className="welcome-message">Welcome To Decentralized Voting Application</h1>
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask</button>
            </div>
            </div>
        </div>
    )
}

export default Login;