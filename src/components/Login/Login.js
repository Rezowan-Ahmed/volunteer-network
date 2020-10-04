import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from '../../logos/google.png';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const history = useHistory();
    // const location = useLocation();
    // const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(function (result) {
            const { displayName, email } = result.loggedInUser;
            const fbGoogleSignInUser = { name: displayName, email };
            setLoggedInUser(fbGoogleSignInUser);
            // history.replace(from);
        }).catch(error => {
            const newUserInfo = { ...loggedInUser };
            newUserInfo.message = error.message;
            setLoggedInUser(newUserInfo);
        });
    }
    return (
        <div>
            <img style={{ width: '202px', height:"60px", margin: "44px 662px 44px 575px"}} src={logo} alt="logo"/>
            <div className="login_form">
                <h2 style={{margin: "20px auto"}}>Login With</h2>
                <div onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }} className="google">
                    <img style={{ width: '30px', height: '30px', marginRight: '10px' }} src={google} alt="google icon" />
                    <p>Continue with Google</p>
                </div>
                <p ><span style={{ margin: '5px auto' }}>Don’t have an account? <Link to='/login' >Create an account</Link></span></p>
            </div>
        </div>
    );
};

export default Login;