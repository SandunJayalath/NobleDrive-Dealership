import { useState } from "react";
import NavBar from "../Components/NavBar";
import HeaderImage from "../Components/HeaderImage";
import HeaderTopic from "../Components/HeaderTopic";
import Description from "../Components/Description";
import TheFooter from "../Components/TheFooter";
import '../styles/ContactPageStyles.css'

/* Importing the Icons */
import { MdEmail } from 'react-icons/md';
import { MdWhatsapp } from 'react-icons/md';
import { MdSend } from 'react-icons/md';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { MessageCircle } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import contactImage from '../assets/contacting-image.png'

function ContactUs() {

    // Creating the message area
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && message) {
            setSent(true);
            setTimeout(() => {
                setSent(false);
            }, 4000);
            setError("");
            setName("");
            setEmail("");
            setMessage("");
        }
    }

    return(
        <>
        <NavBar/>
        
        <div className="pages">
        <HeaderImage 
            backgroundImage="https://th.bing.com/th/id/R.3224e8b4ad69e7d92a0bb45c8123f439?rik=HTWgNDbkSCAk3A&pid=ImgRaw&r=0"
            heading="Get in Touch with Us Today"
            paragraph="Have questions or need assistance? Our friendly team is here to help. Reach out to us, and we'll guide you through your car buying journey."
            buttonText="Explore Our Inventory"
            path="/CarsForSale"/>

        <div className="row container-fluid">
            <div><HeaderTopic text="Contact Us"/></div>
            <div style={{textAlign: "center"}}>
                <Description paragraph="Have questions or need assistance? We're here to help!"/>
            </div>
        </div>

        <div className="container-fluid">
            <div className="container-lg">
                <div className="row mb-4">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                        <div className="contacting-methods-container d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                            <div className="d-flex justify-content-center align-items-center gap-2"><MdEmail style={{width: "40px", height: "auto"}}/><div className="contacting-texts">E-Mail Address</div></div>
                            <h5>nobleDrive2025@gmail.com</h5>

                            <div className="d-flex mt-3 mb-3" style={{width: "100%", height: "2px", backgroundColor: "rgba(0, 0, 0, 0.36)"}}></div>
                            <div className="d-flex gap-2 justify-content-center  align-items-center gap-2"><MdWhatsapp style={{width: "40px", height: "auto"}}/><div className="contacting-texts">Send Messages</div></div>
                            <h5>+54-248734324</h5>
                        </div>
                    </div>

                    <div className="d-lg-none d-md-none d-flex mt-3 mb-3" style={{ width: "100%", height: "2px", backgroundColor: "rgba(116, 116, 116, 0.51)" }}></div>

                    <div className="col-12 col-md-6 col-lg-7 col-xl-7 d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                    <p style={{ fontSize: "40px", fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>FIll The Form</p>
                        <form onSubmit={handleSubmit}>
                            <div style={{ width: "100%", height: "2px", backgroundColor: "rgba(116, 116, 116, 0.51)" }}></div>
                            <input className="input-forms" placeholder="Enter The User Name" required type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input className="input-forms" placeholder="Enter The E-Mail" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <div className="d-flex align-items-center justify-content-center gap-3" style={{ width: "100%", position: "relative" }}>
                                <textarea className="input-forms" placeholder="Write your message here..." type="text" value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: "70%", minHeight: "140px", padding: "10px 20px"}} />
                                <button className="sending-button">Send<MdSend style={{marginLeft: "10px"}}/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <div className="container-fluid" style={{backgroundColor: "rgba(226, 225, 225, 0.65)", padding: "20px"}}>
            <div className="container-sm">
                <HeaderTopic  text="Prefer To Reach Out Directly?"/>
                    <div className="row mt-5 gap-3 d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center contacting-info-container" style={{maxWidth: "450px"}}>
                            <h4 style={{color: "black"}}>Text Us Anytime</h4>
                            <div className="mt-0 mb-3" style={{width: "100%", height: "1px", backgroundColor: "rgb(138, 133, 133)"}}></div>
                            <h6>Have a quick question? Send us a message and we’ll reply ASAP.</h6>
                            <div className="d-flex justify-content-center align-items-center row-with-contact-info"><FaWhatsapp className="contacting-icons"/>+94-25987348 | <MessageCircle className="contacting-icons"/>+45-930487023</div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center contacting-info-container" style={{maxWidth: "450px"}}>
                            <h4 style={{color: "black"}}>Call Us Directly</h4>
                            <div className="mt-0 mb-3" style={{width: "100%", height: "1px", backgroundColor: "rgb(138, 133, 133)"}}></div>
                            <h6>We’re available Monday to Friday, 9AM – 6PM.</h6>
                            <div className="d-flex justify-content-center align-items-center row-with-contact-info"><Phone className="contacting-icons"/>+45-930487023</div>
                        </div>
                    </div>
                    <div className="row text-center mt-5" style={{justifyContent: "center"}}>
                        <h3 style={{color: "black"}} >Social Media Links</h3>
                        <div style={{width: "300px", height: "1px", backgroundColor: "rgb(138, 133, 133)"}}></div>
                        <div className="d-flex justify-content-center mt-3 gap-3 gap-md-5 gap-lg-5 gap-xl-5" style={{alignItems: "center"}}>
                            <a href="" className="hovering-get-large">
                                <Instagram size="35px" style={{color: "rgb(247, 31, 175)", margin: "10px"}}/>                            
                            </a>
                            <div style={{width: "3px", height: "50px", backgroundColor: "rgb(161, 159, 159)"}}></div>
                            
                            <a href="" className="hovering-get-large">
                                <Twitter size="35px" style={{color: "rgb(13, 163, 233)", margin: "10px"}}/>
                            </a>
                            <div style={{width: "3px", height: "50px", backgroundColor: "rgb(161, 159, 159)"}}></div>
                            
                            <a href="" className="hovering-get-large">
                                <Linkedin  size="35px" style={{color: "rgb(0, 37, 245)", margin: "10px"}}/>
                            </a>
                            <div style={{width: "3px", height: "50px", backgroundColor: "rgb(161, 159, 159)"}}></div>
                            
                            <a href="" className="hovering-get-large">
                                <Facebook  size="35px" style={{color: "rgb(31, 100, 247)", margin: "10px"}}/>
                            </a>
                            <div style={{width: "3px", height: "50px", backgroundColor: "rgb(161, 159, 159)"}}></div>
                            
                            <a href="" className="hovering-get-large">
                                <FaWhatsapp  size="35px" style={{color: "rgb(15, 95, 15)", margin: "10px"}}/>
                            </a>
                        </div>
                    </div>
            </div>
        </div>

        <div className="container mt-3 mb-3 d-flex justify-content-center" style={{backgroundColor: "rgb(255, 255, 255)", textAlign: "center"}}>
            <div className="row" style={{display: "flex", alignItems: "center"}}>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 d-flex justify-content-center align-items-center" style={{flexDirection: "column"}}>
                    <h1 style={{marginBottom: "10px"}}><strong>Still Have Questions?</strong></h1>
                    <p style={{fontFamily: "Inter"}}>Our experts are here to help. Whether you're exploring financing options, looking for the perfect vehicle, or just need quick answers — we've got you covered.</p>
                    <Link to="/LiveChatPage">
                        <button id="special-button"  style={{margin: "0px", width: "100%"}}>Chat Live</button>
                    </Link>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-3 mt-md-0 mt-lg-0 mt-xl-0">
                    <img src={contactImage} alt="" style={{margin: "0px", width: "100%", height: "auto", borderRadius: "10px"}}/>
                </div>
            </div>
        </div>
        </div>

        { sent && 
            <>
            <div className="sent-message">
                <hr/>
                <p>Message sent!</p>
                <hr />
            </div>
            </>}
        {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

        <TheFooter/>
        </>
    );
}
export default ContactUs;