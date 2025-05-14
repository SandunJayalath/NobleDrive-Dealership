import { Link } from 'react-router-dom';
import '../styles/TheFooterStyles.css'
import { useState } from 'react';

// Importing the icons
import { X } from 'lucide-react'
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

// Importing the images
import brandLogo from '../assets/BrandLogo.png'

function TheFooter() {

    // Creating the lightboxes for the policies
    const [isTermBox, setisTermBox] = useState(false);
    const [isCookiePolicy, setIsCookiePolicy] = useState(false);
    const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(false);

    return(
        <>
        <div id="the-footer" className="" style={{display: "flex", justifyContent: "center"}}>
            <div className="row" style={{maxWidth: "1300px"}}>
                <div className="col-8 col-sm-6 col-md-3 col-lg-3" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Link className="" to="/"  style={{color: "black", textDecoration: "none"}}>
                        <img className='mb-3' src={brandLogo} width="100" height="auto" alt="Logo"/>
                        <h4 style={{textDecoration: "none"}}>NobleDrive</h4>
                    </Link>
                    <p>Welcome to SD Dealership, where your journey to the perfect car begins! 🚗✨</p>
                </div>

                <div className="col-4 col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center align-items-center" style={{textAlign: "left"}}>
                    <ul className="navbar-nav me-auto ms-auto" type="none" style={{color: "white"}}>
                    <h4 style={{textAlign: "left"}}>Browse</h4>
                        <li className="nav-item">
                            <Link id="footer-links" className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="footer-links" className="nav-link" to="/CarsForSale" >Cars For Sale</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="footer-links" className="nav-link" to="/AboutUs" > About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="footer-links" className="nav-link" to="/ContactUs" >Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center align-items-center" style={{textAlign: "left"}}>
                    <ul className="navbar-nav me-auto ms-auto mt-3 mt-md-0 mt-lg-0 mt-xl-0" type="none" style={{color: "white"}}>
                    <h4 style={{textAlign: "left"}}>Services</h4>
                        <li className="nav-item">
                            <Link id="footer-links" className="nav-link" to="/CarsForSale" >Buyings</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="footer-links" className="nav-link" to="/CarLoanCalculator" >Calculations</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="footer-links" className="nav-link" to="/ComparingPage" > Car Comparings</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="footer-links" className="nav-link" to="/WishList" >Wish List</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center align-items-center" style={{textAlign: "left"}}>
                    <ul className="navbar-nav me-auto" type="none" style={{color: "white"}}>
                        <h4 style={{textAlign: "left"}}>Contact Info</h4>
                        <div className="d-flex mt-3" style={{flexDirection: "column", alignItems: "flex-start"}}>
                            <h6>Address:</h6>
                            <p style={{textAlign: "left"}}>1234 Auto Ave Motor City</p>
                        </div>
                        <div className="d-flex gap-0" style={{width: "200px"}}>
                            <h6>Phone:</h6>
                            <p> (123) 456-7890</p>
                        </div>
                        <div className="d-flex gap-0" style={{width: "200px"}}>
                            <h6 style={{margin: "0px", width: "90px"}}>E-Mail:</h6>
                            <p style={{margin: "0px"}}>info@autox.com</p>
                        </div>
                    </ul>
                </div>


                <div className="col-12 d-flex justify-content-center align-items-center mt-3 mb-3" style={{flexDirection: "column"}}>
                    <h4>Social Media Links</h4>
                        <div className="d-flex justify-content-center mt-3 gap-4 gap-md-5 gap-lg-5 gap-xl-5" style={{alignItems: "center"}}>
                            <a href="" className="footer-social-media-icons">
                                <Instagram size="30px"/>                            
                            </a>
                            <div style={{width: "3px", height: "50px", backgroundColor: "rgb(161, 159, 159)"}}></div>
                            
                            <a href="" className="footer-social-media-icons">
                                <Twitter size="30px"/>
                            </a>
                            <div style={{width: "3px", height: "50px", backgroundColor: "rgb(161, 159, 159)"}}></div>
                            
                            <a href="" className="footer-social-media-icons">
                                <Linkedin  size="30px"/>
                            </a>
                            <div style={{width: "3px", height: "50px", backgroundColor: "rgb(161, 159, 159)"}}></div>
                            
                            <a href="" className="footer-social-media-icons">
                                <Facebook  size="30px"/>
                            </a>
                            <div style={{width: "3px", height: "50px", backgroundColor: "rgb(161, 159, 159)"}}></div>
                            
                            <a href="" className="footer-social-media-icons">
                                <FaWhatsapp  size="30px"/>
                            </a>
                        </div>
                </div>

                <div className="col-12 d-flex ms-2" style={{flexDirection: "column"}}>
                    <div className="policies-container d-flex gap-2 gap-md-4 gap-lg-4 gap-xl-4  mt-3 mb-2">
                        <div onClick={() => setisTermBox(true)} className='policy-texts'>Terms & Condition</div>
                        {isTermBox && (
                            <div className="light-boxes gap-2">
                                <X className='close-button' onClick={() => setisTermBox(false)}/>
                                <h1>Terms & Conditions</h1>
                                <h6>Welcome to AutoX Motors. By accessing and using our website, you agree to the following terms:</h6>
                                <ol type="1">
                                    <li className='mt-3'>Use of Website</li>
                                    <h6>You agree to use this website only for lawful purposes and not in a way that infringes on the rights of, restricts, or inhibits anyone else’s use and enjoyment of the website.</h6>
                                    
                                    <li className='mt-3'>Vehicle Information</li>
                                    <h6>All vehicle details provided on this site are for informational purposes only. We strive to ensure accuracy but do not guarantee the availability, specifications, or pricing of listed vehicles.</h6>
                                
                                    <li className='mt-3'>Pricing</li>
                                    <h6>Prices listed may not include taxes, registration fees, or other charges. Final pricing is subject to change without notice and must be confirmed by our sales team.</h6>

                                    <li className='mt-3'> Intellectual Property</li>
                                    <h6>All content including logos, images, and text is the property of AutoX Motors and may not be reproduced without permission.</h6>
                                
                                    <li className='mt-3'>External Links</li>
                                    <h6>Our website may contain links to third-party sites. We are not responsible for their content or practices.</h6>

                                    <li className='mt-3'> Modifications</li>
                                    <h6>We reserve the right to update or modify these terms at any time without prior notice.</h6>
                                </ol>
                                <div className='d-flex' style={{textAlign: "left", justifyContent: "flex-start", width: "100%", flexDirection: "column"}}>
                                    <h6>By continuing to use this website, you accept these terms and any future updates.</h6>
                                    <h6 style={{fontWeight: "bold"}}>Last updated: January 1, 2025</h6>
                                </div>

                            </div>
                        )}

                        <div className='vertical-line'></div>
                        <div onClick={() => setIsCookiePolicy(true)} className='policy-texts'>Cookie Policy</div>
                        {isCookiePolicy && (
                            <div className="light-boxes gap-2">
                                <X className='close-button' onClick={() => setIsCookiePolicy(false)}/>
                                <h1>Cookies Policy</h1>
                                <h6>NobleDrive uses cookies to enhance your experience on our website. By continuing to use the site, you consent to our use of cookies.</h6>
                                <ol type="1">
                                    <li className='mt-3'>What Are Cookies?</li>
                                    <h6>Cookies are small data files stored on your device that help websites remember your preferences and activities.</h6>
                                    
                                    <li className='mt-3'>Types of Cookies We Use</li>
                                    <h6>- Essential Cookies: Needed for website functionality.</h6>
                                    <h6>- Performance Cookies: Help us analyze website usage.</h6>
                                    <h6>- Functional Cookies: Remember preferences and improve usability.</h6>
                                    <h6>- Advertising Cookies: Show relevant ads based on your browsing.</h6>
                                
                                    <li className='mt-3'>How We Use Cookies</li>
                                    <h6>- To personalize content and remember user settings.</h6>
                                    <h6>- To understand how users interact with the website.</h6>
                                    <h6>- To improve functionality and security.</h6>

                                    <li className='mt-3'> Managing Cookies</li>
                                    <h6>You can manage or disable cookies through your browser settings. Note that disabling some cookies may affect site functionality.</h6>
                                
                                    <li className='mt-3'>Third-Party Cookies</li>
                                    <h6>We may use third-party services (e.g., Google Analytics) that also use cookies. Their usage is governed by their own privacy policies.</h6>

                                    <li className='mt-3'>Updates</li>
                                    <h6>This policy may be updated to reflect changes in technology or legal requirements.</h6>

                                </ol>
                                <div className='d-flex' style={{textAlign: "left", justifyContent: "flex-start", width: "100%", flexDirection: "column"}}>
                                    <h6 style={{fontWeight: "bold"}}>Last updated: January 1, 2025</h6>
                                </div>

                        </div>
                        )}

                        <div className='vertical-line'></div>
                        <div onClick={() => setIsPrivacyPolicy(true)} className='policy-texts'>Privacy Policy</div>
                        {isPrivacyPolicy && (
                            <div className="light-boxes gap-2">
                                <X className='close-button' onClick={() => setIsPrivacyPolicy(false)}/>
                                <h1>Privacy Policy</h1>
                                <h6>Your privacy is important to us. This policy explains how AutoX Motors collects, uses, and protects your information.</h6>
                                <ol type="1">
                                    <li className='mt-3'> Information We Collect</li>
                                    <h6>- Personal Information: name, email, phone number, etc., when submitted via contact forms or newsletters.</h6>
                                    <h6>- Browsing Data: IP address, browser type, and interactions with our site.</h6>
                                    
                                    <li className='mt-3'> How We Use Your Information</li>
                                    <h6>- To respond to inquiries and provide customer support.</h6>
                                    <h6>- To improve website performance and user experience.</h6>
                                    <h6>- To send promotional emails (only with your consent).</h6>
                                
                                    <li className='mt-3'> Data Protection</li>
                                    <h6>We implement industry-standard security measures to protect your personal data from unauthorized access or disclosure.</h6>

                                    <li className='mt-3'> Sharing of Information</li>
                                    <h6>We do not sell, trade, or rent your personal information. Data may be shared with trusted service providers solely for business operations.</h6>
                                
                                    <li className='mt-3'>Cookies</li>
                                    <h6>See our Cookies Policy to learn how we use cookies to personalize content and analyze traffic.</h6>

                                    <li className='mt-3'> Your Rights</li>
                                    <h6>You can request access, correction, or deletion of your personal data at any time.</h6>

                                    <li className='mt-3'>Changes to This Policy</li>
                                    <h6>This policy may be updated periodically. Please review it regularly.</h6>

                                </ol>
                                <div className='d-flex' style={{textAlign: "left", justifyContent: "flex-start", width: "100%", flexDirection: "column"}}>
                                    <h6>Contact: privacy@NobleDrive.com  </h6>
                                    <h6 style={{fontWeight: "bold"}}>Last updated: January 1, 2025</h6>
                                </div>
                            </div>
                        )}
                    </div>
                    <h5>© 2025 NobleDrive. All rights reserved.</h5>
                </div>

            </div>
            </div>
        </>
    );
}
export default TheFooter;