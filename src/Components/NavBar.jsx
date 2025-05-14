import * as React from 'react';
import { Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import '../styles/NavBar.css'

// Importing the images
import brandLogo from '../assets/BrandLogo.png'

function NavBar(){
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{zIndex: "5000", top: "0"}} id="navbar">
        <div className="container" id="nav-bar-container">
            <Link className="navbar-brand fs-3 d-flex flex-row flex-md-row gap-2 align-items-center justify-content-center justify-content-lg-start" to="/" style={{color: "black",   fontFamily: "Montserrat, sans-serif"}}>
                <img src={brandLogo} width="50" height="50" className="d-inline-block align-top start-10" alt=""/>
                <strong>NobleDrive</strong>
            </Link>
                
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto" style={{color: "black"}}>
                <li className="nav-item">
                    <Link id="nav-links" className="nav-link" to="/" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link id="nav-links" className="nav-link" to="/CarsForSale">Cars For Sale</Link>
                </li>
                <li className="nav-item">
                    <Link id="nav-links" className="nav-link" to="/AboutUs" > About Us</Link>
                </li>
                <li className="nav-item">
                    <Link id="nav-links" className="nav-link" to="/ContactUs">Contact Us</Link>
                </li>
            </ul>
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <li className="d-flex justify-content-center gap-5">
                    <span id="tooltip">
                        <Link to="/WishList" style={{textDecoration: "none", color: "rgb(46, 46, 46)"}}>
                            <div id="wish-list-icon"><FaHeart size="20px"/></div>
                        </Link>
                        <span id="tooltip-text" style={{marginBottom: "0px"}}>Wish List</span>
                    </span>
                    <span id="tooltip">
                        <Link to="/LiveChatPage" style={{textDecoration: "none", color: "rgb(46, 46, 46)"}}>
                            <div id="messagin-icon"><FaCommentAlt/></div>
                        </Link>
                        <span id="tooltip-text" style={{marginBottom: "0px"}}>Live Chat</span>
                    </span>
                </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                <li className="d-flex justify-content-center">
                    <Link to="/SignIn" style={{textDecoration: "none"}}>
                        <button id="nav-bar-button" style={{display: "flex", alignItems: "center"}}><strong>Sign in</strong><MdAccountCircle style={{alignItems: "center", marginLeft: "5px"}}/></button>
                    </Link>
                    <Link to="/SignUp" style={{textDecoration: "none"}}>
                        <button id="nav-bar-button" style={{display: "flex", alignItems: "center"}}><strong>Sign up</strong><MdAccountCircle style={{alignItems: "center", marginLeft: "5px"}}/></button>
                    </Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    
    </>
    );
}
export default NavBar;