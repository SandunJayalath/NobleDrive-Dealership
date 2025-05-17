import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import brandLogo from '../../assets/BrandLogo.png'

function SignIn(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('login/', { username, password });
          localStorage.setItem('access', res.data.access);
          onLogin(res.data.username);
        } catch (error) {
          console.error(error);
          alert("Login failed!");
        }
    };

     return(
        <>
        <div id="sign-in-page" className="d-flex justify-content-center" style={{margin: "0", padding: "0", position: "relative", height: "100vh", overflow: "hidden"}}>       
        
        <div className="container-fluid mt-3 ms-3">
            <Link to="/" style={{textDecoration: "none", fontSize: "20px", color: "white", marginTop: "20px"}}>
                <img src={brandLogo} width="40" height="40" alt=""/>
                <strong className="ms-2">NobleDrive</strong>
            </Link>
        </div>

        <p id="subtle-message">🛈 This is a front-end demo only. Authentication is not connected to a server.</p>
        
        <div id="menu-box">
            <div className="container-fluid " id="sign-in-container">
            <form onSubmit={handleLogin}>
                <div id="title"><strong>Sign In</strong></div>
                    <div id="input-box">
                        <input type="text" placeholder="Enter Your Email" required style={{textAlign: "center"}}/>
                    <div id="underline"></div>
                </div>

                <div id="input-box">
                    <input type="password" placeholder="Enter Your Password" required style={{textAlign: "center"}}/>
                    <div id="underline"></div>
                </div>

                    <h6 id="box-paragraph">I want to receive updates, special offers, and promotional emails. I understand that I can opt out at any time.</h6>
                    <h6 id="box-paragraph" style={{marginTop: "0px"}}>I agree to the Terms of Service and acknowledge SD Dealership's Privacy Policy</h6>
                
                <div style={{textAlign: "center"}}>
                    <div className="row mb-3">
                        <div className="col-6 d-flex justify-content-center gap-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/><h6 style={{fontSize: "15px"}}>Remember Me</h6>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            <Link to="" style={{textDecoration: "none"}}>
                                <h6 id="forgot-password-link">Forgot Password?</h6>
                            </Link>
                        </div>
                    </div>
                    <input id="signing-button" type="submit" name="" value="Sign In" style={{position: "relative"}}/>
                </div>

            </form>
            </div>
            <p style={{textAlign: "center", color: "white", position: "absolute"}}>Don't have account! 
                <Link className="ms-2" to="/SignUp" style={{textDecoration: "none", fontWeight: "bold", color: "rgb(39, 127, 241)"}}>
                    Sign Up
                </Link>
            </p>
        </div>
        </div>
        </>
    );
} 
export default SignIn;