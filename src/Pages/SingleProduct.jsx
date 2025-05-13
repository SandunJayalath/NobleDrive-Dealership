import NavBar from "../Components/NavBar";
import TheFooter from "../Components/TheFooter"
import HeaderTopic from "../Components/HeaderTopic";
import ProductSpecificTag from "../Components/ProductSpecificTag";
import SubCarCard from "../Components/SubCarCard";
import NormalButton from "../Components/NormalButton";
import SingleProductSlider from "../Components/SingleProductSlider";
import InputArea from "../Components/Calculating File Components/InputArea";
import Description from "../Components/Description";
import TestimonialCard from "../Components/TestimonialCard";
import React, { useState } from 'react';
import Slider from "react-slick";
import { useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// Iconst that are imported for usages
import { FaHeart } from "react-icons/fa";
import { FaStar} from 'react-icons/fa';
import { Cog } from 'lucide-react';
import { FaCar } from 'react-icons/fa';
import { Armchair } from 'lucide-react';
import { FaCarSide } from 'react-icons/fa';
import { FaGasPump } from 'react-icons/fa';
import { Settings2 } from 'lucide-react';
import { DatabaseZap } from 'lucide-react';
import { RefreshCcw } from 'lucide-react';
import { CircleGauge } from 'lucide-react';
import { Siren } from 'lucide-react';
import { Speaker } from 'lucide-react';
import { Package } from 'lucide-react';
import { Cctv } from 'lucide-react';
import { Vibrate } from 'lucide-react';
import { LifeBuoy } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { RefreshCwOff } from 'lucide-react';
import { MousePointerClick } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Phone } from 'lucide-react';
import { X } from 'lucide-react';
import { Send } from 'lucide-react';

// For the image slider section
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Importing the images
import profile from '../assets/profile.png'

function SingleProduct(props) {

        // State to track collapse visibility
    const [isOpen, setIsOpen] = useState(false);
    
    // Toggle the collapse visibility
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // For the responsiveness of the image slider cards at the ending edge of the page
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
        },
        mobile: {
        breakpoint: { max: 364, min: 0 },
        items: 2
        }
    };

    // Images of the Single Product Slider

    const slides = [
        { url: "https://th.bing.com/th/id/OIP.leJwpzGbZmZQ3N5fb-MrxAHaE6?rs=1&pid=ImgDetMain", title: "beach" },
        { url: "https://th.bing.com/th/id/R.a0359dbba66a98e59f40d1e5e4934aed?rik=QihtkiMCaHg%2fSg&pid=ImgRaw&r=0", title: "boat" },
        { url: "https://th.bing.com/th/id/OIP.BfiffDL50n5zHA6sW1m-2AHaD3?rs=1&pid=ImgDetMain", title: "forest" },
        { url: "https://th.bing.com/th/id/R.b0cb4237b3883d95a22be5b1259444f5?rik=CJFXOqiwkPgXag&pid=ImgRaw&r=0", title: "city" },
        { url: "https://th.bing.com/th/id/OIP.0NzO2UwcnlPuHTIVd1rDMQHaE8?rs=1&pid=ImgDetMain", title: "italy" },
    ]

    // Measure Loan Payment
        const [presentValue, setPresentValue] = useState("");
        const [rate, setRate] = useState("");
        const [periods, setPeriods] = useState("");
        const [payment, setPayment] = useState("");

        const formatCurrency = (value) => {
            if (!value) return "";
                return "$" + parseFloat(value.replace(/[^0-9.-]+/g, "")).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            };
        
            const parseCurrency = (value) => {
                return value.replace(/[^0-9.-]+/g, ""); // Remove $ and commas for calculation
                };
        
            const handleCalculate = () => {
            try {
                const PV = parseFloat(parseCurrency(presentValue));
                const r = parseFloat(rate) / 100; 
                const n = parseInt(periods);
        
            if (isNaN(PV) || isNaN(r) || isNaN(n) || n <= 0) {
                setPayment("Invalid input");
                return;
            }
        
            const P = (r * PV) / (1 - Math.pow(1 + r, -n));
            setPayment(formatCurrency(P.toString()));
            } catch (error) {
            setPayment("Error in calculation");
            }
        };

        const handlePresentValueChange = (e) => {
            const value = e.target.value;
            setPresentValue(formatCurrency(value));
            };

        // Scroll handling Review Section
        const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleWheel = (e) => {
        const isScrollable = container.scrollHeight > container.clientHeight;
        if (!isScrollable) return;

        const deltaY = e.deltaY;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const offsetHeight = container.offsetHeight;

        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + offsetHeight >= scrollHeight;

        // If not at the edges, prevent scrolling the page
        if (
            (deltaY < 0 && !isAtTop) ||
            (deltaY > 0 && !isAtBottom)
        ) {
            e.preventDefault();
            e.stopPropagation();
            container.scrollTop += deltaY;
        }
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
        container.removeEventListener("wheel", handleWheel);
        };
    }, []);

    // Seller Form
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submit, setSubmit] = useState("");

    const handleSending = (e) => {
        e.preventDefault();

        if (name && email && message) {
            setSubmit(true);
            setTimeout(() => {
                setSubmit(false);
            }, 4000);
            setIsFormOpen(false)
            setEmail("");
            setName("");
            setMessage("");
        }
    }

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

        <div className="container" style={{marginTop: "150px", marginBottom :"30px"}}>
            <div className="row" style={{display: "flex", alignItems: "center"}}>
                <div className="col-lg-7 col-12 col-md-12">
                    <div className="mb-md-4" style={{maxWidth: "600px", height: "350px", margin: "0 auto"}}>
                        <SingleProductSlider slides={slides}/>
                    </div>
                </div>

                <div className="mt-4 mt-sm-4 mt-lg-0 mt-xl-0 col-lg-5 col-12 col-md-12 text-center" style={{textAlign: "center"}}>
                <div className="car-card-body" style={{textAlign: "left", padding: "10px", borderRadius: "10px", position: "relative"}}>
                    <div className="container-fluid mb-3 p-0 name-price-holder">
                        <h3>Chevrolet Camaro</h3>
                        <h1 className="car-price">$45, 000</h1>
                    </div>
                    <h6 className="card-text" style={{fontSize: "16px"}}>Yellow color Chevrolet Camaro for sale! Brand new and Fresh most popular car, this is one of among 200 cars</h6>
                    
                    <div className="row gap-3 d-flex justify-content-left" style={{textAlign: "center", margin: "20px 0px"}}>
                        <h5 style={{padding: "5px", width: "80px", borderRadius: "10px", backgroundColor: "rgba(2, 112, 255, 0.36)"}}>Yellow</h5>
                        <h5 style={{padding: "5px", width: "80px", borderRadius: "10px", backgroundColor: "rgba(2, 112, 255, 0.36)"}}>V8</h5>
                        <h5 style={{padding: "5px", width: "80px", borderRadius: "10px", backgroundColor: "rgba(2, 112, 255, 0.36)"}}>New</h5>
                    </div>

                    <div className="d-flex" style={{marginBottom: "10px"}}>
                        <FaStar size="25px" color="rgb(250, 170, 22)"/>
                        <FaStar size="25px" color="rgb(250, 170, 22)"/>
                        <FaStar size="25px" color="rgb(250, 170, 22)"/>
                        <FaStar size="25px" color="rgb(250, 170, 22)"/>
                        <FaStar size="25px" color="rgb(250, 170, 22)"/>
                        <h5 style={{marginLeft: "10px"}}>5.0</h5>
                    </div>

                    <div className="d-flex seller-info" style={{flexDirection: "column"}}>
                        <h4>Seller Details</h4>
                        <hr />
                        <div className="contacts d-flex gap-3 align-items-center">
                            <FaMapMarkerAlt className="detail-icon"/><h5>Texas</h5>
                            <div className="hrzntl-line-sel-dtls"></div>
                            <Phone className="detail-icon"/><h5>+45-23456432</h5>
                            <div className="hrzntl-line-sel-dtls"></div>
                            <button onClick={() => setIsFormOpen(true)} className="seller-contact">Contact</button>
                        </div>
                    </div>
                    </div>                         
                </div>
            </div>
            </div>

            <div className="container-fluid " style={{ backgroundColor: "rgba(216, 219, 247, 0.95)", padding: "20px", margin: "0px 0px", textAlign: "center"}}>
            <div className="container" style={{textAlign: "center"}}>
                <HeaderTopic text="2010 Chevrolet Camaro Specifications"/>
                <h6>Please be kind to understand that N/A means Not Available!</h6>
                <div className="row justify-content-center" style={{maxWidth: "1500px", marginTop: "50px"}}>
                    <ProductSpecificTag
                        icon={<Cog size="30px"/>} spec="Engine:" type="3.6L V6, Optional 3.6L"/>

                    <ProductSpecificTag 
                        icon={<Package size="30px"/>} spec="Trim:" type="LS Coupe"/>

                    <ProductSpecificTag
                        icon={<ShieldHalf size="30px"/>} spec="Air Bags:" type="Front/Side"/>
                    
                    <ProductSpecificTag
                        icon={<Armchair size="30px"/>} spec="Seating:" type="04"/>

                    <ProductSpecificTag
                        icon={<DatabaseZap size="30px"/>} spec="Horsepower:" type="304"/>

                    <ProductSpecificTag
                        icon={<FaCar size="30px"/>} spec="Body Style:" type="Coupe"/>

                    <ProductSpecificTag
                        icon={<LifeBuoy size="30px"/>} spec="Drivetrain:" type="RWD"/>

                    <ProductSpecificTag
                        icon={<RefreshCcw size="30px"/>} spec="Torque:" type="273@5200"/>
                    
                    <ProductSpecificTag
                        icon={<SquareArrowOutUpRight size="30px"/>} spec="Doors:" type="02"/>
                    
                    <ProductSpecificTag
                        icon={<FaGasPump size="30px"/>} spec="Fuel:" type="Unleaded"/>

                    <ProductSpecificTag
                        icon={<Vibrate size="30px"/>} spec="Sensors:" type="N/A"/>

                    <ProductSpecificTag
                        icon={<Cctv size="30px"/>} spec="Cameras:" type="N/A"/>
                
                    <ProductSpecificTag
                        icon={<CircleGauge size="30px"/>} spec="Speed:" type="155 mph"/>
                
                    <ProductSpecificTag
                        icon={<Settings2 size="30px"/>} spec="Transmission:" type="Manual/Auto"/>
                
                    <ProductSpecificTag
                        icon={<RefreshCwOff size="30px"/>} spec="Disc Brakes:" type="04"/>
                
                    <ProductSpecificTag
                        icon={<RefreshCwOff size="30px"/>} spec="Anti Brakes:" type="Available"/>

                    <ProductSpecificTag
                        icon={<Siren size="30px"/>} spec="Headlights:" type="Halogen"/>

                    <ProductSpecificTag
                        icon={<Speaker size="30px"/>} spec="Speakers:" type="06"/>

                </div>
            </div>
            </div>

            <div className="container-fluid text-center" style={{marginBottom: "50px"}}>
                <button
                    id="normal-button"
                    className="btn btn-primary"
                    type="button"
                    onClick={toggleCollapse}
                    aria-expanded={isOpen}
                    aria-controls="content"
                >
                Check More Features
                </button>

            {/* Collapse content based on the state */}
            <div className={`fade-container ${isOpen ? 'show' : 'hide'}`} id="content">
            <div className="card card-body mt-3" style={{backgroundColor: "rgba(137, 175, 231, 0.41)"}}>
                <div className="container">
                <div className="row justify-content-center mt-3">
                    <ProductSpecificTag
                        spec="length:" type="190.4"/>
                    <ProductSpecificTag
                        spec="Width:" type="75.5"/>
                    <ProductSpecificTag
                        spec="Height:" type="54.4"/>
                    <ProductSpecificTag
                        spec="WheelBase:" type="N/A"/>
                    <ProductSpecificTag
                        spec="RPM of Torque:" type="5,200"/>
                    <ProductSpecificTag
                        spec="Cargo Capacity:" type="11.3"/>
                    <ProductSpecificTag
                        spec="Ground Clearance:" type="N/A"/>
                    <ProductSpecificTag
                        spec="Number of Cylinder:" type="6"/>
                    <ProductSpecificTag
                        spec="Interior:" type="Black and Blue mixed"/>
                    <ProductSpecificTag
                        spec="Navigation System:" type="N/A"/>
                </div>
            </div>
            </div>
            </div>
            </div>

            <div className="container-fluid" style={{backgroundColor: "rgba(226, 226, 226, 0.64)", margin: "30px 0px"}}>
            <div className="container">
                <div className="row g-10 md-g-10 d-flex justify-content-center" style={{textAlign: "center"}}>
                    <div className="col-12 col-xl-6 col-lg-6 col-md-12 d-flex" style={{flexDirection: "column", justifyContent: "center", position: "relative"}}>
                        <HeaderTopic text="Customers Reviews" style={{webkitTextFillColor: "white"}}/>
                            <h6>See what our happy customers have to say about the cars they've purchased from us! 🚗💬 Their words say it all — real experiences, real satisfaction.</h6>
                            
                            <div className="mt-4 product-review-scroll-container" style={{ maxHeight: "240px", overflow: "scroll", border: "1px solid #ccc", padding: "10px", backgroundColor: "rgba(0, 0, 0, 0)", border: "none", overflowX: "hidden"}}
                                onMouseEnter={(e) => {
                                e.currentTarget.style.overflowY = "scroll";
                                }}
                                onMouseLeave={(e) => {
                                e.currentTarget.style.overflowY = "scroll";
                                }}>
                        
                            <TestimonialCard 
                                name="Dan"
                                image={profile}
                                rating={5}
                                amount="5.0"
                                review="I recently purchased a Chevrolet Camaro which is super cool from SD Dealerships, and I'm absolutely in love with it! The tailoring is impeccable, and the fabric feels luxurious and breathable. It instantly elevates any outfit, and I've received so many compliments. Zara's customer service was also fantastic, with quick delivery and careful packaging. It's a wardrobe staple I'll cherish for years!"/>

                            <TestimonialCard 
                                name="Cooper"
                                image={profile}
                                rating={5}
                                amount="5.0"
                                review="I recently purchased a Chevrolet Camaro which is super cool from SD Dealerships, and I'm absolutely in love with it! The tailoring is impeccable, and the fabric feels luxurious and breathable. It instantly elevates any outfit, and I've received so many compliments. Zara's customer service was also fantastic, with quick delivery and careful packaging. It's a wardrobe staple I'll cherish for years!"/>

                            <TestimonialCard 
                                name="Tom"
                                image={profile}
                                rating={5}
                                amount="5.0"
                                review="I recently purchased a Chevrolet Camaro which is super cool from SD Dealerships, and I'm absolutely in love with it! The tailoring is impeccable, and the fabric feels luxurious and breathable. It instantly elevates any outfit, and I've received so many compliments. Zara's customer service was also fantastic, with quick delivery and careful packaging. It's a wardrobe staple I'll cherish for years!"/>
                            </div>

                            <form onSubmit={handleReview}>
                            <div className="row d-flex mt-4 justify-content-center" style={{gap: "0px"}}>
                                <textarea style={{backgroundColor: "rgb(46, 46, 46)", width: "90%", height: "100px", color: "white", borderRadius: "10px", padding: "8px 15px", border: "2px solid rgb(9, 70, 236)"}} type="text" placeholder="Type a review about the above product"  value={review} onChange={(e) => setReview(e.target.value)}/>
                                <button id="submit-button"><strong>Submit</strong></button>
                            </div>
                            </form>
                            <div className="scroll-down-indicator"><ChevronDown style={{width: "30px", height: "30px"}}/></div>
                    </div>
                    <div className="col-12 col-xl-6 col-lg-6 col-md-12 d-flex" style={{textAlign: "center", paddingBottom: "20px", flexDirection: "column", justifyContent: "center"}}>
                        <HeaderTopic text="Measure The Loan Payment"/>
                        <h6>Measure how much you need to pay perodically on a loan</h6>
                        <div className="container-fluid">
                        <div id="math-space" className="col-12 col-sm-12 col-md-4 col-lg-3" style={{border: "3px solid #003dc0", borderRadius: "20px", padding: "40px", display: "grid", placeItems: "center", backgroundColor: "rgba(241, 241, 241, 0.81)", marginTop: "40px", width: "100%"}}>
                            <h4 id="header-topic"><strong>Measure Loan Payment</strong></h4>
                            <div id="math-container" className="container"> 
                                <InputArea statement="The Present Value" value={presentValue} onChange={handlePresentValueChange}/>
                                <InputArea statement="The Rate per Period" value={rate} onChange={(e) =>  setRate(e.target.value)}/>
                                <InputArea statement="The Number of Period" value={periods} onChange={(e) => setPeriods(e.target.value)}/>
                            </div>
            
                            <div className="container-fluid d-flex justify-content-center flex-col gap-4" style={{display: "grid", placeItems: "center"}}>
                            <button id="normal-button" onClick={handleCalculate}>Calculate</button>
                                <div style={{marginTop: "50px"}}><input type="text" placeholder="Amount" value={payment} readOnly style={{width: "200px", border: "3px solid #003dc0", borderRadius: "40px", textAlign: "center", fontFamily: "Tilt Neon", color: "#003dc0", fontSize: "20px"}}/></div>
                            </div>
                        </div>
                        <div> 
                        </div>                        
                            <h6 style={{margin: "20px 0px"}}>Check Out The <strong> Total Cost of Ownership. </strong> 🧾 The complete cost of buying, using, and maintaining something over its entire lifetime.</h6>
                            <Link to="/CarLoanCalculator" style={{textDecoration: "none"}}>
                                <button id="normal-button" style={{marginTop: "0px"}}>Click Here <MousePointerClick/></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className="row" style={{backgroundImage: "linear-gradient(to right, rgb(24, 24, 24), rgb(0, 0, 0))",textAlign: "center", padding: "30px 0px"}}>
            <h2 style={{color: "white", fontSize: "28px"}}>You May Also Like</h2>
            <div className="d-flex justify-content-center" style={{padding: "20px", marginBottom: "10px", borderRadius: "10px"}}>
                <div className="container d-flex justify-content-center" style={{width: "100%", alignItems: "center"}}>
                <div className="container" style={{margin: "10px 500px", }}>
                    <Carousel responsive={responsive}>                      
                        <SubCarCard carImage="https://th.bing.com/th/id/OIP.0m2hnpY-ax7svRf6Ct3pCgHaFj?rs=1&pid=ImgDetMain"
                            carName="BMW"
                            price="$45,000"
                            description="White Color BMW Well Used Super features Car"/>

                        <SubCarCard carImage="https://th.bing.com/th/id/OIP.fo2UVCcc7bsJYtnyYlmfEAHaEK?rs=1&pid=ImgDetMain"
                            carName="BENZ"
                            price="$45,000"
                            description="White Color BMW Well Used Super features Car"/>

                        <SubCarCard carImage="https://th.bing.com/th/id/OIP.yBgqSziYg9OKw0xXVn_LUQHaEK?rs=1&pid=ImgDetMain"
                            carName="PORSCHE"
                            price="$45,000"
                            description="White Color BMW Well Used Super features Car"/>

                        <SubCarCard carImage="https://th.bing.com/th/id/OIP.2zaygpR8CyBj_UeFBcb6oAHaEK?rs=1&pid=ImgDetMain"
                            carName="MUSTANG"
                            price="$45,000"
                            description="White Color BMW Well Used Super features Car"/>
                        
                        <SubCarCard carImage="https://th.bing.com/th/id/OIP.leJwpzGbZmZQ3N5fb-MrxAHaE6?rs=1&pid=ImgDetMain"
                            carName="CAMARO"
                            price="$45,000"
                            description="White Color BMW Well Used Super features Car"
                            path="./SingleProduct"/>
                        
                        <SubCarCard carImage="https://th.bing.com/th/id/OIP.FjJwyHtjHdNdc-HJ-MuaSwHaFf?rs=1&pid=ImgDetMain"
                            carName="LAMBORGHINI"
                            price="$45,000"
                            description="White Color BMW Well Used Super features Car"/>
                        
                        <SubCarCard carImage="https://th.bing.com/th/id/OIP.s9DLcizteOFUmWj1lnJeoQHaFj?rs=1&pid=ImgDetMain"
                            carName="FERRARI"
                            price="$45,000"
                            description="White Color BMW Well Used Super features Car"/>
                        
                    </Carousel>;
                    </div>
                    </div>
                    </div>
                <div style={{marginTop: "-70px"}}><NormalButton path="/CarsForSale" text="View Our Collection"/></div>
        </div>
        </div>

        {/* The Label */}
        <div id="label-message">
            <hr />
            <h6>🛈 This is a demo page showing details for one model: Chevrolet Camaro.</h6>
            <hr />
        </div>

        {/* Seller Contact Form */}
        { isFormOpen && (
            <div className="contact-form pt-4">
                <button className="close-button" onClick={() => setIsFormOpen(false)}><X/></button>
                <h3>Contact The Seller</h3>
                <form onSubmit={handleSending}>
                <div className=" row d-flex mt-4 mb-4">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center">
                        <input type="text" placeholder="Enter the name..." required  value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center mt-3 mt-md-0 mt-lg-0 mt-xl-0">
                        <input type="text" placeholder="Enter the E-Mail..." required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center mt-3" style={{minHeight: "300px"}}>
                        <textarea type="text" placeholder="I am interested in the Camaro... Is it still available?" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 d-flex mt-3 gap-3 gap-md-5 gap-lg-5 gap-xl-5 align-items-center justify-content-center" style={{flexDirection: "column"}}>
                        <input type="text" placeholder="Enter the Phone number..." required/>
                        <h6>🚧 This is a demo form and does not send actual messages.</h6>
                        <button id="sending-seller-button" style={{margin: "0px"}}>Send<Send/></button>
                    </div>
                </div>
                </form>

                <div className="d-flex text-center" style={{flexDirection: "column"}}>
                    <h3>Seller Info</h3>
                    <hr />
                    <div className="seller-content row d-flex mt-4 mb-4" style={{width: "100%"}}>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center gap-2">
                        <h4>Seller Name:</h4><h5>Alex</h5>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center gap-2">
                        <h4>Location:</h4><h5>New York</h5>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center gap-2">
                        <h4>Dealer Ratings:</h4><h5>0.5</h5>
                    </div>
                    <div className="col-12 d-flex justify-content-center gap-2 mt-3 align-items-center" style={{flexDirection: "column"}}>
                        <h4>Open Hours</h4>
                        <p>Mon–Sat: 9am–6pm</p>
                    </div>
                </div>
                </div>

            </div>
        )}

        {submit &&
             <div className="sent-message sent-message-seller">
                <hr/>
                <h6>Message Sent Successfully!</h6>
                <p>Thank you for reaching out to the seller. They’ll get back to you shortly. In the meantime, feel free to browse other listings or contact us if you have any questions.</p>
                <hr />
        </div>
       }

        {/* Message after sending the review */}
         {sent &&
            <div className="sent-message">
                <hr/>
                <p>Thanks for your feedback! We appreciate it.</p>
                <hr />
        </div> }

        <TheFooter/>
        </>
    );
}
export default SingleProduct;
