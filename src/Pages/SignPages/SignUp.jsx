import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import brandLogo from '../../assets/BrandLogo.png'

function SignUp(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await axios.post('register/', { username, password });
          alert("User registered!");
        } catch (error) {
          console.error(error);
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
            <div className="container-fluid" id="sign-in-container">
            <form onSubmit={handleRegister}>
                <div id="title"><strong>Sign Up</strong></div>
                    <div className="row">
                        <div className="col-lg-6 col-6 col-md-6">
                            <div id="input-box">
                                <input type="text" placeholder="First Name" required style={{width: "100%"}}/>
                                <div id="underline"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-6 col-md-6" style={{textAlign :"center"}}>
                            <div id="input-box">
                                <input type="text" placeholder="Last Name" required style={{width: "100%"}}/>
                                <div id="underline"></div>
                            </div>
                        </div>
                    </div>
                    <div id="input-box">
                        <input type="text" placeholder="Enter Your Email" required style={{textAlign: "center"}}/>
                    <div id="underline"></div>
                    </div>

                    <div id="input-box">
                        <input type="password" placeholder="Enter Your Password" required style={{textAlign: "center"}}/>
                        <div id="underline"></div>
                    </div>
                    
                    <div id="input-box">
                        <input type="password" placeholder="Confirm Your Password" required style={{textAlign: "center"}}/>
                        <div id="underline"></div>
                    </div>

                    <h6 id="box-paragraph"> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{marginRight: "5px"}}/>I have read and accept agree with all Terms & Conditions</h6>
                        
                    <input id="signing-button" type="submit" name="" value="Sign Up"/>
            </form>
            </div>
        </div>
            </div>
        </>
    );
} 
export default SignUp;