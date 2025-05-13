import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

function SignInAdPage () {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => 
        setTheme((prev) => prev === "light" ? "dark": "light")

    return (
        <>
        <div className={`themed-page ${theme}`} style={{height: "100vh", overflow: "hidden"}}>
            
        <div className=" d-flex container-fluid">
            <Link to="/" onClick={() => {navigate("/");}} style={{textDecoration: "none", fontSize: "20px", color: "var(--text-color)", marginTop: "20px"}}>
                <img src="./src/assets/New-Logo.png" width="50" height="50" clasName="d-inline-block align-top start-10" alt=""/>
                <strong>SD Dealership</strong>
            </Link>
            <button id="theme-button" onClick={toggleTheme}>{theme === "light" ? <Moon/> : <Sun/>}</button>
        </div>
                    
            <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                <div className="container-fluid d-flex justify-content-center" style={{width: "500px", alignItems: "center", height: "700px", backgroundColor: "var(--bg-color)", border: "4px solid rgb(0, 177, 231)", borderRadius: "20px", color: "var(--text-color)"}}>    
                <form className="d-grid gap-3" style={{width: "100%"}}>
                    <h2 id="ADtitle"><strong>Sign In</strong></h2>
                    <div className="d-grid" style={{placeItems: "center", gap: "40px", width: "100%"}}>
                        <input id="ADinput" type="text" placeholder="Enter Your E-Mail here..." style={{width: "80%"}}/>
                        <input id="ADinput" type="text" placeholder="Enter Your Password..." style={{width: "80%"}}/>
                    </div>

                    <div id="input-box" style={{textAlign: "center"}}>
                        <div className="row d-flex" style={{width: "100%", alignItems: "center", margin: "0px 0px"}}>
                            <div className="col-lg-6 col-6 col-md-6">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/><h6 style={{fontSize: "15px", width: "100%"}}>Remember Me</h6>
                            </div>
                            <div className="col-lg-6 col-6 col-md-6">
                                <a href="" style={{textDecoration: "none"}}>
                                    <h6 id="ADforgot-password-link">Forgot Password?</h6>
                                </a>
                            </div>
                        </div>
                        <button id="sign-in-button"><strong>Continue</strong></button>
                    </div>
                </form>
              
                   
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default SignInAdPage;
