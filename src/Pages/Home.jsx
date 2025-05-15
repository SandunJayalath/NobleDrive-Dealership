import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import HeaderTopic from "../Components/HeaderTopic"
import CarBrandsGroup from "../Components/CarBrandsGroup";
import NormalButton from "../Components/NormalButton";
import Description from "../Components/Description";
import SpecialCards from "../Components/SpecialCards";
import TheFooter from "../Components/TheFooter";
import SpecialButton from "../Components/SpecialButton";
import SubCarCard from "../Components/SubCarCard";
import TestimonialCard from "../Components/TestimonialCard";
import TestimonialStars from "../Components/TestimonialStars";
import Topics from "../Components/Topics";
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Link } from "react-router-dom";
import '../styles/HomePageStyles.css'

// importing the icons & images in used
import { Star } from 'lucide-react';
import { Sunset } from 'lucide-react';
import { Tag } from 'lucide-react';
import { Shield } from 'lucide-react';
import { FaStar} from 'react-icons/fa';
import { Keyboard } from 'lucide-react';
import { FaPaperPlane } from "react-icons/fa";
import { Hourglass } from 'lucide-react';
import { X } from 'lucide-react';
import bmw from '../assets/bmwLogo.png'
import lambo from '../assets/lambo.png'
import benz from '../assets/benzLogo.png'
import profile from '../assets/profile.png'
import loanImage from '../assets/car-loan.png'
import compare from '../assets/carComparisons.png'
import newsletter from '../assets/newsletterImage.png'

// For the image slider section
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState, useRef } from "react";

function Home() {

    // For the responsiveness of the image slider cards
    const responsive = {
        superLargeDesktop: {
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
          breakpoint: { max: 450, min: 200 },
          items: 1
        }
      };

    const right1 = useRef();
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible2(entry.isIntersecting))
        });

        observer.observe(right1.current);
    }, [])

    const left2 = useRef();
    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible3(entry.isIntersecting));
        });

        observer.observe(left2.current);
    }, [])

    const right2 = useRef();
    const [isVisible4, setIsVisible4] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible4(entry.isIntersecting));
        });

        observer.observe(right2.current);
    }, [])

    // Changing the names of the Drop Downs
    const [fuelTypes, setFuelTypes] = useState("Fuel Types");
    const [transTypes, setTransTypes] = useState("Transmission Types")
    const [priceRange, setPriceRange] = useState("Price Range");
    const [year, setYear] = useState("Year");

    const [isWarningBox, setIsWarningBox] = useState(false)

    return(
        <>
        <NavBar/>

        <div className="pages">
        <Header/>

        <div className="row" style={{backgroundColor: "rgb(255, 255, 255)", textAlign: "center"}}>
            <HeaderTopic text="Popular Brands We Have"/>
            <Description paragraph="Discover iconic brands like BMW and Mercedes-Benz, where cutting-edge innovation meets timeless elegance. Find your dream car and elevate your driving experience today." />
            <div className="container d-flex justify-content-center">
            <div className="row g-3 md-g-10" style={{display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center", maxWidth: "1200px", padding: "30px", paddingTop: "0px"}}>
                <CarBrandsGroup
                path=""
                carImage="https://th.bing.com/th/id/R.a685ebd039990cdb201e3cc07ea44c3e?rik=YcFjgBYU0SVC%2bg&pid=ImgRaw&r=0"
                carName="CHEVROLET"/>

                <CarBrandsGroup
                path=""
                carImage={bmw}
                carName="BMW"/>
                
                <CarBrandsGroup
                path=""
                carImage={lambo}
                carName="LAMBORGHINI"/>

                <CarBrandsGroup
                path=""
                carImage="https://th.bing.com/th/id/R.3694533c7a34df40e210c83245bc705a?rik=%2bpwxUBtQTgR%2feg&pid=ImgRaw&r=0"
                carName="ROLLSROYCE"/>

                <CarBrandsGroup
                path=""
                carImage={benz}
                carName="BENZ"/>

                <CarBrandsGroup
                path=""
                carImage="https://th.bing.com/th/id/R.fdf73726681950078cf87bef7dacd10d?rik=RfGr%2br9m2S9D3g&pid=ImgRaw&r=0"
                carName="FERRARI"/>

                <CarBrandsGroup
                path=""
                carImage="https://pngimg.com/uploads/bentley/bentley_PNG34.png"
                carName="BENTLEY"/>

                <CarBrandsGroup
                path=""
                carImage="https://th.bing.com/th/id/R.9890c04e5df9d5113f1876dd006d92c4?rik=wpoH0vwX7o7dpA&pid=ImgRaw&r=0"
                carName="NISSAN"/>

                <CarBrandsGroup
                path=""
                carImage="https://th.bing.com/th/id/R.9a0418bb0bbe073538b89238e0a31880?rik=TNfiP1s5wrlmqw&pid=ImgRaw&r=0"
                carName="AUDI"/>

                <CarBrandsGroup
                path=""
                carImage="https://th.bing.com/th/id/OIP.g_Hit3U21deQ5l6A6Uf5ugHaHn?rs=1&pid=ImgDetMain"
                carName="DODGE"/>

                <CarBrandsGroup
                path=""
                carImage="https://www.groupe-grim.com/jaguar-land-rover/wp-content/uploads/2023/01/logo-jaguar-noir-png.png"
                carName="JAGUAR"/>
            </div>
            </div>
        </div>

        <div className="container-fluid" style={{backgroundColor: "rgba(202, 227, 241, 0.49)"}}>
        <div className="row" style={{textAlign: "center", padding: "20px"}}>
            <HeaderTopic text="The Types of The Cars"/>
                
            <div className="d-flex justify-content-center mt-3">
                <div className="row" style={{display: "flex", justifyContent: "center"}}>
                    <CarBrandsGroup
                    path=""
                    carImage="https://th.bing.com/th/id/R.f88a0f84532e865db596c6bdfd9bbdb0?rik=SxdoFkSmqNtS1Q&pid=ImgRaw&r=0"
                    carName="COUPES"/>

                    <CarBrandsGroup
                    path=""
                    carImage="https://cdn4.iconfinder.com/data/icons/urban-transport-3/50/27-1024.png"
                    carName="SEDANS"/>

                    <CarBrandsGroup
                    path=""
                    carImage="https://th.bing.com/th/id/R.07ae4184325dfd99725442ec3ac16328?rik=ufJuxjOE7gNJ9w&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcar-transparent-background%2fcar-transparent-background-22.png&ehk=pHFKR7cFiqlqYImNAsBz8Z7rFcJIT9RgZy4NR%2bm48YU%3d&risl=&pid=ImgRaw&r=0"
                    carName="SPORTS"/>

                    <CarBrandsGroup
                    path=""
                    carImage="https://cdn1.iconfinder.com/data/icons/car-2-1/50/109-512.png"
                    carName="FAMILY"/>

                    <CarBrandsGroup
                    path=""
                    carImage="https://cdn2.iconfinder.com/data/icons/vehicle-type/1024/suv-512.png"
                    carName="SUV"/>

                    <CarBrandsGroup
                    path=""
                    carImage="https://cdn2.iconfinder.com/data/icons/vehicle-type/1024/pick-up-1024.png"
                    carName="PU TRUCKS"/>

                </div>
                </div>
                
                <div id="dropdown-type-container" className="justify-content-center" style={{marginTop: "20px", padding: "30px 0px", backgroundColor: "rgba(184, 221, 243, 0.49)"}}>
                <div className="row d-flex" onClick={() => setIsWarningBox(true)} style={{justifyContent: "space-"}}>

                    <div className="col-4 col-md-3 col-lg-3 col-xl-3 d-flex "  style={{justifyContent: "space-around"}}>
                    <div className="dropdown" id="dropdown-button">
                        <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>{fuelTypes}</strong>
                        </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item active" onClick={() => setFuelTypes("Gasoline")}>Gasoline</a></li>
                        <li><a className="dropdown-item" onClick={() => setFuelTypes("Electric")}>Electric</a></li>
                        <li><a className="dropdown-item" onClick={() => setFuelTypes("Hybrid")}>Hybrid</a></li>
                    </ul>
                    </div>
                    </div>

                    <div className="col-7 col-md-4 col-lg-4 col-xl-4 d-flex"  style={{justifyContent: "space-around"}}>
                    <div className="dropdown" id="dropdown-button">
                        <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width :"200px"}}>
                            <strong>{transTypes}</strong>
                        </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item active" onClick={() => setTransTypes("Manual")}>Manual</a></li>
                        <li><a className="dropdown-item" onClick={() => setTransTypes("Auto")}>Auto</a></li>
                        <li><a className="dropdown-item" onClick={() => setTransTypes("CVT")}>CVT</a></li>
                    </ul>
                    </div>
                    </div>

                    <div className="col-6 col-md-3 col-lg-3 col-xl-3 d-flex mt-3 mt-md-0 mt-lg-0 mt-xl-0"  style={{justifyContent: "space-around"}}>
                    <div className="dropdown" id="dropdown-button">
                        <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>{priceRange}</strong>
                        </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item active" onClick={() => setPriceRange("$50,000")}>$50,000</a></li>
                        <li><a className="dropdown-item" onClick={() => setPriceRange("$100,000")}>$100,000</a></li>
                        <li><a className="dropdown-item" onClick={() => setPriceRange("$10,000,000")}>$10,000,000</a></li>
                    </ul>
                    </div>
                    </div>

                    <div className="col-6 col-md-2 col-lg-2 col-xl-2 d-flex  mt-3 mt-md-0 mt-lg-0 mt-xl-0" style={{justifyContent: "space-around"}}>
                    <div className="dropdown" id="dropdown-button">
                        <button className=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>{year}</strong>
                        </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item active" onClick={() => setYear("2022")}>2022</a></li>
                        <li><a className="dropdown-item" onClick={() => setYear("2023")}>2023</a></li>
                        <li><a className="dropdown-item" onClick={() => setYear("2024")}>2024</a></li>
                    </ul>
                    </div>
                    </div>

                    </div>
                </div>           
                
                <NormalButton text="View All Cars"
                path="/CarsForSale"/> 
            </div>
            </div>

        <div className="row" style={{textAlign: "center", padding: "0px", backgroundColor: "rgb(236, 236, 236)"}}>
            <HeaderTopic text="Best Deals on Today!"/>
                <Description paragraph="At NobleDrive Dealerships, we’re dedicated to providing exceptional quality at every step of your car-buying journey. With a wide selection of top-rated vehicles and a team of friendly, knowledgeable staff, we ensure a seamless and enjoyable experience. Our state-of-the-art facility and certified professionals prioritize transparency, integrity, and your satisfaction. Discover the perfect vehicle with us, where your trust drives everything we do." />
                <div style={{backgroundImage: "linear-gradient(to right, rgb(26, 26, 26), rgb(0, 0, 0))", padding: "30px 0px"}}>
                    <div className="container">
                        <Carousel responsive={responsive}>                      
                            <SubCarCard carImage="https://cdn.rnudah.com/images/plain/07af77f0550035ec792b3c91253d77c0-2911479614976981582.jpg"
                                carName="2018 05 Series"
                                price="$60,150"
                                seats="04 "
                                description="Luxury meets performance in the refined and tech-packed BMW 5 Series."/>

                            <SubCarCard carImage="https://media.drive.com.au/obj/tx_q:70,rs:auto:960:540:1/driveau/upload/vehicles/used/mercedes-benz/c-class/2021/356ad781-7dab-50bd-be13-840895550000"
                                carName="BENZ W205"
                                price="$48,000"
                                seats="04 "
                                description="Sleek design and powerful performance define the sophisticated Benz W205."/>

                            <SubCarCard carImage="https://bringatrailer.com/wp-content/uploads/2023/05/2023_porsche_911-gt3-rs_gt3-rs-5-45639.jpg?fit=940%2C627"
                                carName="Porsche GT3 RS"
                                price="$241,300"
                                seats="02"
                                description="Track-ready precision and unmatched speed in the Porsche GT3 RS."/>

                            <SubCarCard carImage="https://www.mclarencf.com/imagetag/104/main/l/Used-2020-Ford-Mustang-Shelby-GT500.jpg"
                                carName="Mustang GT500"
                                price="$78,000"
                                seats="02 "
                                description="Raw power and classic muscle, the Mustang GT500 dominates the road."/>
                            <SubCarCard carImage="https://th.bing.com/th/id/OIP.leJwpzGbZmZQ3N5fb-MrxAHaE6?rs=1&pid=ImgDetMain"
                                carName="Chevy Camaro"
                                price="$45,000"
                                seats="02 "
                                description="Bold style and muscle car performance, the Chevy Camaro stands out."/>
                            
                            <SubCarCard carImage="https://th.bing.com/th/id/OIP.FjJwyHtjHdNdc-HJ-MuaSwHaFf?rs=1&pid=ImgDetMain"
                                carName="Lambo Huracan"
                                price="$331,000"
                                seats="02 "
                                description="Speed, design, and pure driving thrill, the Lamborghini Huracan excites."/>

                            <SubCarCard carImage="https://th.bing.com/th/id/OIP.s9DLcizteOFUmWj1lnJeoQHaFj?rs=1&pid=ImgDetMain"
                                carName="Ferrari FF"
                                price="$157,000"
                                seats="02 "
                                description="Luxury and power combine with four-seat versatility in the Ferrari FF."/>
                        </Carousel>;
                    </div>
                </div>
                
                <div style={{marginBottom: "40px"}}>
                    <NormalButton text="View Our Inventory" path="/CarsForSale"/>
                </div>
        </div>

        <div className="row" style={{textAlign: "center", padding: "0px"}}>
            <HeaderTopic text="Why NobleDrive"/>
                <Description paragraph="At NobleDrive Dealerships, we’re dedicated to providing exceptional quality at every step of your car-buying journey. With a wide selection of top-rated vehicles and a team of friendly, knowledgeable staff, we ensure a seamless and enjoyable experience. Our state-of-the-art facility and certified professionals prioritize transparency, integrity, and your satisfaction. Discover the perfect vehicle with us, where your trust drives everything we do." />
                    <div className="container d-flex justify-content-center" style={{backgroundColor: "rgb(210, 217, 248)", padding: "20px", maxWidth: "1500px", borderRadius: "10px", textAlign: 'center'}}>
                        <div className="row g-5 md-g-10" style={{textAlign: "center"}}>
                            <SpecialCards text="Good Service" img={<Star className="special-card-icons hovering-get-large"/>}/>
                            <SpecialCards text="Nice Experience" img={<Sunset className="special-card-icons hovering-get-large"/>}/>
                            <SpecialCards text="Good Prices" img={<Tag className="special-card-icons hovering-get-large"/>}/>
                            <SpecialCards text="Good Handlings" img={<Shield className="special-card-icons hovering-get-large"/>}/>
                        </div>
                    </div>
                    <div style={{marginBottom: "20px"}}>
                        <NormalButton text="Know About Us" path="/AboutUs"/>
                    </div>
        </div>

        <div className="row" style={{textAlign: "center", backgroundColor: "rgb(235, 235, 235)"}}>
            <HeaderTopic text="What Our Customers Say"/>
            <Description paragraph="Real stories from people who found their perfect ride with us."/>
            <div className="d-flex justify-content-center " >
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
            <div className="container text-center" style={{margin: "30px 0px"}}>
                <h3 style={{color: "rgb(6, 48, 107)", fontSize: "28px", marginTop: "30px", marginBottom: "20px"}}><strong>Ready to write your own success story?</strong></h3>
                <div className="d-flex justify-content-center" style={{alignItems: "center", gap: "20px"}}>
                    <Keyboard size="40px"/>
                    <Link to="/AboutUs#chatting-section">
                    <button id="special-button" style={{margin: "0px", backgroundColor: "black"}}>Click Here</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="container-fluid d-flex justify-content-center" style={{backgroundImage: "linear-gradient(to right, rgb(109, 0, 252), rgb(14, 0, 7))"}}>
            <div className="row" style={{display: "flex", alignItems: "center", maxHeight: "1200px", textAlign: "center", maxWidth: "1500px"}}>
                <div id="image-text-section" className="col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6 d-flex justify-content-center" style={{textAlign: "center", color: "white", marginTop: "25px", marginBottom: "25px", flexDirection: "column"}}>
                        <h1 style={{marginBottom: "20px"}}><strong>Trade-In Value Estimator: Get the Best Deal for Your Car</strong></h1>
                        <p style={{fontFamily: "Tilt Neon"}}>Thinking about trading in your current car? Find out how much it’s worth with our easy-to-use Trade-In Value Estimator. Simply input your car's make, model, year, and condition to get an instant estimate and maximize your trade-in value!</p>
                        <div style={{display: "block", margin: "0 auto"}}><SpecialButton text="Value My Trade" path="/CarLoanCalculator"/></div>
                </div>
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6" style={{textAlign: "center", marginTop: "25px", marginBottom: "25px"}}>
                    <div ref={right1} className={`from-right ${isVisible2 ? 'visible' : ''}`}>
                        <img src={loanImage} alt="Trade-In Car Image" width="360px" style={{borderRadius: "20px"}}/>
                    </div>
                </div>
            </div>
        </div>

        <div style={{ backgroundColor: "rgba(202, 227, 241, 0.49)", width: "100%"}}>
            <div className="container-fluid" style={{backgroundImage: "linear-gradient(to right, rgb(109, 0, 252), rgb(209, 0, 105))", clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)", width: "100%"}}>
            <div className="container">
            <div className="row" style={{display: "flex", alignItems: "center", maxHeight: "1200px", paddingBottom: "50px"}}>
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6 d-flex justify-content-center" style={{marginTop: "25px", marginBottom: "25px"}}>
                    <div ref={left2} className={`from-left ${isVisible3 ? 'visible' : ''}`}>
                        <img src={compare} alt="Trade-In Car Image" width="360px" style={{borderRadius: "20px"}}/>
                    </div>
                </div>
                <div id="image-text-section" className="col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6" style={{textAlign: "left", color: "white", marginTop: "25px", marginBottom: "25px"}}>
                    <h1 style={{marginBottom: "20px"}}><strong>Compare Your Dream Cars Side-by-Side</strong></h1>
                    <p style={{fontFamily: "Tilt Neon"}}>Explore our car comparison tool and make informed decisions with ease. Compare your favorite cars side-by-side, from features and performance to design and pricing, all with high-quality images for a closer look. Whether you're searching for the perfect ride or just browsing options, this tool helps you find the car that fits your needs and lifestyle.</p>
                    <div style={{float: "left"}}><SpecialButton text="Start Comparing Now!" path="/ComparingPage"/></div>
                </div>
            </div>
            </div>
            </div>
        </div>

        <div style={{ backgroundColor: "rgba(202, 227, 241, 0.49)", width: "100%"}}>
            <div className="container-fluid" style={{width: "100%", textAlign: "center"}}>
            <div className="container">
            <div className="row" style={{display: "flex", alignItems: "center", maxHeight: "1200px", paddingBottom: "50px", color: "black", WebkitTextFillColor: "rgb(32, 32, 32)", textAlign: "center"}}>
                <div id="image-text-section" className="col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6" style={{color: "white", marginTop: "25px", marginBottom: "25px", textAlign: "center"}}>
                    <h1 style={{marginBottom: "20px"}}><strong>Subscribe to Our Newsletter</strong></h1>
                    <p style={{fontFamily: "Tilt Neon"}}>Get updates on latest car arrivals, exclusive deals, and more.</p>
                    
                    <div className="d-flex gap-2 mt-5 mb-2" style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px", textAlign: "center"}}>
                        <input id="input-box" type="text" placeholder="Enter the E-Mail here..." style={{width: "400px", height: "40px", margin: "0px", fontWeight: "500"}}/>
                        <button id="submit-button" style={{padding: "0px 30px", alignItems: "center", justifyContent: "center", height: "40px", margin: "0px", marginTop: "0px", color: "white", borderRadius: "30px", WebkitTextFillColor: "rgb(0, 0, 0)"}}>
                            <strong>SUBSCRIBE</strong>
                        </button>
                    </div>
                    <p>🛈 This is a demo. Newsletter sign-up is not connected to a real mailing system.</p>
                    <h5 style={{marginTop: "20px"}}>📩 No spam, unsubscribe anytime.</h5>
                </div>
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 col-xl-6 d-flex justify-content-center" style={{marginTop: "25px", marginBottom: "25px"}}>
                    <div ref={right2} className={`from-right ${isVisible4 ? 'visible' : ''}`}>
                        <img src={newsletter} alt="Trade-In Car Image" width="360px" style={{borderRadius: "20px"}}/>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>

        {/* The LightBox Comopnent */}
        { isWarningBox && (
            <div className="coming-soon-box" style={{zIndex: "2000"}}>
                <div className="d-flex justify-content-center align-items-center" style={{width: "100%"}}>
                    <div className='heading'>Demo Info!</div>
                </div>
                <button className='close-button' onClick={() => setIsWarningBox(false)}><X/></button>
                <div className='hrzntl-line'></div>
                
                <p>Oops! This section isn't quite ready yet. I'm putting the finishing touches on it, check back soon!</p>
                <button className='gotcha-btn' onClick={() => setIsWarningBox(false)}>Gotcha!</button>
            </div>
            
        ) }

            <TheFooter/>
        </>
    );
}
export default Home;
