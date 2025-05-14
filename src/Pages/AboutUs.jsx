// Importing the components in used
import { useState } from "react";
import NavBar from "../Components/NavBar";
import HeaderTopic from "../Components/HeaderTopic"
import CarBrandsGroup from "../Components/CarBrandsGroup";
import NormalButton from "../Components/NormalButton";
import Description from "../Components/Description";
import Header from "../Components/Header";
import HeaderImage from "../Components/HeaderImage";
import Topics from "../Components/Topics";
import TheFooter from "../Components/TheFooter";
import ImgTextCards from "../Components/ImgTextCards";
import SpecialButton from "../Components/SpecialButton";
import TestimonialCard from "../Components/TestimonialCard";
import TestimonialStars from "../Components/TestimonialStars";
import '../styles/AboutPageStyles.css'

// Importing the icons
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { Send } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Quote } from 'lucide-react';
import { Star } from 'lucide-react';
import { Sunrise } from 'lucide-react';
import { Tag } from 'lucide-react';
import { Shield } from 'lucide-react';
import brand from '../assets/BrandLogo.png'
import mission from '../assets/missionImage.png'
import history from '../assets/historyImage.png'
import profile from '../assets/profile.png'
import backgroundImage from '../assets/aboutPageHeader.png'

function AboutUs() {

    const location = useLocation();
    
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
        }
    }, [location]);

    // Sending Reviews
    const [review, setReview] = useState("")
    const [sent, setSent] = useState("")

    const handleReview = (e) => {
        e.preventDefault();

        if ( review ) {
            setSent(true);
            setTimeout(() => {
                setSent(false);
            }, 4000);
            setReview("")
        }
    }

    return(
        <>
        <NavBar/>

        <div className="pages">
        <HeaderImage 
            backgroundImage={backgroundImage}
            heading="Driven by Trust, Powered by Quality"
            paragraph="At SD Dealership, we help you find the perfect car with great prices and a hassle-free experience."
            buttonText="Explore Our Inventory"
            path="/CarsForSale"/>

        <div className="container">
            <div className="row" style={{display: "flex", justifyContent: "center", alignItems: "center", position: "relative", padding: "30px 0px"}}>
                <div className="col-lg-6 col-12 col-md-6 text-center d-flex justify-content-center align-items-center">
                    <h1 id="who-we-are-heading"><strong>WHO WE ARE</strong></h1>
                </div>

                <div className="col-lg-6 col-12 col-md-6 text-center d-flex justify-content-center" style={{flexDirection: "column", alignItems: "center"}}>
                    <h2 id="the-quote" style={{fontFamily: "Poppins", fontWeight: "600"}}><Quote className="quote me-2" style={{transform: "rotate(180deg)"}}/>Driven by trust, powered by passion-SD Dealerships isn’t just about cars; <br/> it’s about connecting you with the journey of your dreams.<Quote className="quote ms-2"/></h2>
                        <div className="container" style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", paddingTop: "20px", fontSize: "15px", maxWidth: "350px", color: "rgba(0, 0, 0, 0.69)"}}> 
                            <div style={{display: "grid", placeItems: "center"}}><strong><FaPhone color="black" size="25px" style={{marginRight: "10px"}}/>+94-63514851</strong></div>
                                <div style={{width: "2px", height: "50px", backgroundColor: "rgb(109, 109, 109)"}}></div>
                            <div style={{display: "grid", placeItems: "center"}}><strong><FaWhatsapp color="black" size="30px" style={{marginRight: "10px"}}/>+235643874</strong></div>
                        </div>
                </div>
            </div>
        </div>

        <div className="row container-fluid d-flex justify-content-center" style={{backgroundColor: "rgba(224, 224, 224, 0.51)", padding: "10px", marginTop: "20px", textAlign: "center", alignItems: "center"}}>
            <div id="container">
                <div style={{marginTop: "50px"}}><HeaderTopic text="Why Choose Us?"/></div>
                <Description paragraph="At our dealership, we pride ourselves on offering exceptional service, a wide range of top-quality vehicles, and a hassle-free buying experience. With competitive pricing, expert advice, and a commitment to customer satisfaction, we make finding your perfect car easy and enjoyable."/>
                    <div className="row d-flex mb-4">
                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center">
                            <ImgTextCards 
                                heading="Good Service" 
                                paragraph="We provide exceptional service with knowledgeable staff, transparent pricing, and personalized support, ensuring a seamless car-buying experience that exceeds your expectations every step of the way." 
                                styledIcon={<Star className="styling-the-text-card-icon" />}
                                />
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center">
                            <ImgTextCards 
                                heading="Nice Experience" 
                                paragraph="At our dealership, customers enjoy a seamless experience with friendly experts, quality vehicles, transparent pricing, easy financing, and exceptional after-sales support, making car buying truly enjoyable." 
                                styledIcon={<Sunrise className="styling-the-text-card-icon"/>}
                                />
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center">
                            <ImgTextCards 
                                heading="Good Prices" 
                                paragraph="We offer competitive pricing on all vehicles, ensuring exceptional value for your money. Drive away in your dream car without exceeding your budget!" 
                                styledIcon={<Tag className="styling-the-text-card-icon"/>}
                                />
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center">
                            <ImgTextCards 
                                heading="Good Handlings" 
                                paragraph="We provide expert guidance, transparent pricing, personalized service, and seamless financing options, ensuring a stress-free car buying experience from start to finish." 
                                styledIcon={<Shield className="styling-the-text-card-icon"/>}
                                />
                        </div>
                    </div>
            </div>
        </div>

        <div className="container-fluid pt-3 pb-3">
            <div className="container">
            <div className="row" style={{display: "flex", alignItems: "center"}}>
                <div className="col-12 col-lg-8 col-md-12 col-sm-12 col-xl-8 image-text-section-about">
                    <h1 style={{marginBottom: "20px"}}><strong>What Is NobleDrive</strong></h1>
                    <p style={{fontFamily: "Inter"}}>Welcome to NobleDrive, where your journey to the perfect car begins! 🚗✨
                    At SD Dealership, we don’t just sell cars—we create experiences. Whether you're hunting for the latest models, a reliable pre-owned vehicle, or expert advice, we’re here to guide you every step of the way.
                    Think of us as your trusted pit stop for everything automotive: exceptional selection, personalized service, and unbeatable deals—all in one place. Ready to take the driver’s seat in your next adventure? Let’s make it happen!</p>
                    <SpecialButton text="Check Our Inventory" path="/CarsForSale"/>
                </div>

                <div className="col-12 col-lg-4 col-md-12 col-sm-12 col-xl-4 mt-5 mb-5 d-flex justify-content-center align-items-center">
                    <img src={brand} alt="Brand Logo" width="400px" style={{borderRadius: "10px", maxHeight: "400px", minHeight: "150px"}}/>
                </div>
            </div>
            </div>
        </div>

        <div className="container-fluid pt-4 pb-4" style={{backgroundColor: "rgba(221, 221, 221, 0.53)"}}>
            <div className="container">
            <div className="row" style={{display: "flex", alignItems: "center", maxHeight: "1200px"}}>
            <div className="col-12 col-lg-4 col-md-12 col-sm-12 col-xl-4 d-flex justify-content-center align-items-center">
                <img src={mission} alt="Trade-In Car Image" style={{width: "95%", borderRadius: "10px"}}/>
            </div>
                <div className="col-12 col-lg-8 col-md-12 col-sm-12 col-xl-8 mt-4 mt-md-4 mt-lg-0 mt-xl-0 image-text-section-about">
                    <h1 style={{marginBottom: "20px"}}><strong>What is our Mission and Value</strong></h1>
                    <p style={{fontFamily: "Inter"}}>Our mission is simple: to make your car-buying journey as seamless and enjoyable as possible. At SD Dealership, we are driven by core values of integrity, trust, and excellence. We believe in treating every customer like family, offering transparency, personalized service, and expert guidance. Whether you’re looking for a reliable commuter, a family SUV, or your dream luxury car, we are committed to helping you find the perfect fit while delivering an experience that exceeds expectations.</p>
                    <p style={{fontFamily: "Inter"}}>At SD Dearlership passion for cars is matched only by our dedication to our customers. We strive to build lasting relationships by understanding your needs and delivering solutions that fit your lifestyle. Beyond selling vehicles, we are committed to being a dealership you can rely on for honest advice, quality service, and ongoing support long after your purchase. Your satisfaction is our driving force, and we’re here to ensure every mile of your journey is a smooth and enjoyable one.</p>
                </div>
            </div>
            </div>
        </div>

        <div className="container-fluid pt-3 pb-3">
            <div className="container">
            <div className="row" style={{display: "flex", alignItems: "center", maxHeight: "1200px"}}>
                <div className="col-12 col-lg-8 col-md-12 col-sm-12 col-xl-8 image-text-section-about">
                    <h1 style={{marginBottom: "20px"}}><strong>The History of Ours</strong></h1>
                    <p style={{fontFamily: "Inter"}}>Established in 2024, SD Dealerships has grown from a humble, single-location dealership into a trusted name in the automotive industry. Founded by Tony Hawk, our journey began with a simple mission: to provide quality vehicles and exceptional service to our community.</p>
                    <p style={{fontFamily: "Inter"}}>Over the years, SD Dealerships has expanded its operations, earning a reputation for reliability, integrity, and a customer-first approach. From introducing innovative financing options to building a state-of-the-art showroom, we have continuously evolved to meet the changing needs of our valued customers.As a family-owned and operated business, SD Dealerships remains deeply committed to fostering long-term relationships with our customers and community. Whether you're buying your first car or upgrading to your dream vehicle, our legacy of excellence ensures you’re in good hands.</p>
                </div>

                <div className="col-12 col-lg-4 col-md-12 col-sm-12 col-xl-4 d-flex justify-content-center align-items-center">
                    <img src={history} alt="Trade-In Car Image" style={{width: "95%", borderRadius: "10px"}}/>
                </div>
            </div>
            </div>
        </div>

        <div className="row" style={{textAlign: "center", backgroundColor: "rgb(235, 235, 235)"}}>
            <HeaderTopic text="What Our Customers Say"/>
            <Description paragraph="Real stories from people who found their perfect ride with us."/>
            <div className="d-flex justify-content-center" >
            <div className="row" style={{display: "flex", justifyContent: "center", textAlign: "center", maxWidth: "1300px"}}>
                
                <div className="col-12 col-md-5 col-lg-4 col-lg-4" id="testimonial-card">
                <TestimonialCard 
                    name="Dan"
                    image={profile}
                    data={
                        <>
                        <TestimonialStars/>
                        <TestimonialStars/>
                        <TestimonialStars/>
                        <TestimonialStars/>
                        </>
                    }
                    amount="5.0"
                    review="Purchasing my sports car from this dealership was an excellent experience from start to finish. The staff were welcoming, professional, and genuinely passionate about the cars they sell. They listened to what I wanted and guided me to the perfect match without any pressure or upselling."/>
                </div>

                <div className="col-12 col-md-5 col-lg-4 col-lg-4" id="testimonial-card">
                <TestimonialCard 
                    name="Tom"
                    image={profile}
                    data={
                        <>
                        <TestimonialStars/>
                        <TestimonialStars/>
                        <TestimonialStars/>
                        <TestimonialStars/>
                        </>
                    }
                    amount="4.0"
                    review="The car I chose is nothing short of amazing. It delivers incredible speed, handling, and style—everything I was hoping for in a high-performance vehicle. It was spotless upon delivery and clearly maintained to the highest standards. Driving it has been an absolute thrill."/>
                </div>

                <div className="col-12 col-md-6 col-lg-4 col-lg-4" id="testimonial-card">
                <TestimonialCard 
                    name="Smith"
                    image={profile}
                    data={
                        <>
                        <TestimonialStars/>
                        <TestimonialStars/>
                        <TestimonialStars/>
                        </>
                    }
                    amount="3.0"
                    review="What impressed me most was the follow-up after the purchase. The team reached out to ensure I was happy and offered support if I had any questions. That level of care really stood out. I’d definitely recommend this dealership to anyone looking for a top-tier sports car and customer service to match."/>
                </div>
                
                </div>
            </div>
            <div id="chatting-section" className="container-fluid mt-0 mb-0" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <HeaderTopic text="Share Your Experience With Us"/>
                <Description paragraph="Your review helps us grow and serve you better."/>
                <form  onSubmit={handleReview}>
                    <div className="row d-flex justify-content-center">
                        <textarea id="smart-filtering-text-areas" className="reviews-sending-text-area" style={{backgroundColor: "rgb(46, 46, 46)", width: "99%", minHeight: "100px", color: "white", textAlign: "left", padding: "10px", borderRadius: "10px"}} type="text" placeholder="Give us a review about our service" value={review} onChange={(e) => setReview(e.target.value)}/>
                        <button id="submit-button" className="d-flex justify-content-center"><strong><Send size="20px" style={{marginRight: "10px"}}/>Send</strong></button>
                    
                    </div>
                </form>
            </div>
            </div>

            <div className="container-fluid" style={{textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img id="image-paragraph-section" src="https://static.vecteezy.com/system/resources/thumbnails/023/374/286/small_2x/beautiful-car-transparent-background-free-png.png" alt="Trade-In Car Image" style={{borderRadius: "10px", maxHeight: "300px", width: "auto"}}/>
                        </div>
                        <div id="image-text-section" className="col-12 col-lg-8 col-md-12 col-xl-8" style={{textAlign: "left", color: "black", marginTop: "25px", marginBottom: "25px", textAlign: "center", display: "flex",  flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                            <h1 style={{marginBottom: "20px"}}><strong>Ready to Drive Your Dream Car?</strong></h1>
                            <p style={{fontFamily: "Tilt Neon"}}>We have unbeatable deals on top brands. Let’s get you behind the wheel!</p>
                            <div className="d-flex justify-content-center gap-3">
                                <div style={{float: "left"}}><SpecialButton text="Browse" path="/CarsForSale"/></div>
                                <div style={{float: "left"}}><SpecialButton text="Contact Us" path="/ContactUs"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Message after sending the review */}
         {sent &&
            <div className="sent-message review-sent-message" style={{width: "350px"}}>
                <hr/>
                <p>Thanks for your feedback! We appreciate it.</p>
                <hr />
            </div> }
           
        <TheFooter/>
        </>
    );
}
export default AboutUs;
