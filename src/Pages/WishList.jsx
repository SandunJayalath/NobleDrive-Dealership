import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from "../Components/NavBar";
import HeaderImage from "../Components/HeaderImage";
import HeaderTopic from "../Components/HeaderTopic";
import CarSellCard from "../Components/CarSellCard"
import NormalButton from "../Components/NormalButton";
import SubCarCard from "../Components/SubCarCard";
import TheFooter from "../Components/TheFooter";
import CarTypesLinks from '../Components/CarTypesLinks';
import 'bootstrap/dist/css/bootstrap.css';

import { FaShoppingCart } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ChevronDown } from 'lucide-react';
import { LogIn } from 'lucide-react';
import { X } from 'lucide-react';
import { Hourglass } from 'lucide-react';

// For the image slider section
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function WishList(){

    // Creating the SideBar and the OffCanvas
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >=992);
    const [showCanvas, setShowCanvas] = useState(false);

    // Handle window resize to toggle between sidebar and offcanvas
      useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth >= 992);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    // For the responsiveness of the image slider cards
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

    const cars = [
        {id: 1, path: "./SingleProduct", url: "https://th.bing.com/th/id/OIP.0m2hnpY-ax7svRf6Ct3pCgHaFj?rs=1&pid=ImgDetMain", price: "$30,000", name: "BMW M3", year: "2018", description: "White Color BMW Well Used Super features Car",
            fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "Used",
        },
        {id: 2, path: "./SingleProduct", url: "https://th.bing.com/th/id/OIP.leJwpzGbZmZQ3N5fb-MrxAHaE6?rs=1&pid=ImgDetMain", price: "$300,000", name: "CAMARO", year: "2008", description: "Yellow Color Camaro Well Used Super features Car",
        fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "New",
        },
        {id: 3, path: "./SingleProduct", url: "https://th.bing.com/th/id/OIP.FjJwyHtjHdNdc-HJ-MuaSwHaFf?rs=1&pid=ImgDetMain", price: "$230,000", name: "Lamborghini", year: "2020", description: "Great Color Lamborghini Well Used Super features Car",
        fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "Used",
        },
        {id: 4, path: "./SingleProduct", url: "https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", price: "$30,000", name: "BMW W3", year: "2018", description: "White Color BMW Well Used Super features Car",
        fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "New",
        },
        {id: 5, path: "./SingleProduct", url: "https://th.bing.com/th/id/OIP.4w3BCeTHYtmZZ-YAOtozVQHaFj?rs=1&pid=ImgDetMain", price: "$310,000", name: "FERRARI", year: "2008", description: "Light Color Ferrari Well Used Super features Car",
        fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "Used",
        },
        {id: 6, path: "./SingleProduct", url: "https://th.bing.com/th/id/OIP.YHxcrdneT3Lw3SthJ5NdbQHaFj?rs=1&pid=ImgDetMain", price: "$310,000", name: "PORSCHE gt3RS", year: "2019", description: "White Color BMW Well Used Super features Car",
        fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "New",
        }
    ]

    // The Error Message
      const [isWarningBox, setIsWarningBox] = useState(false)

      const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (car) => {
    const updated = favorites.filter((fav) => fav.id !== car.id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

    return (
        <>
        <NavBar/>
        <div className="pages">
        <HeaderImage 
            backgroundImage="https://th.bing.com/th/id/R.dd315b9eb2ec9f3c55d32bf94a8dc889?rik=hSz09XQTjQkHWQ&pid=ImgRaw&r=0"
            heading="Save The Best for Later!"
            paragraph="At SD Dealership, we help you find the perfect car with great prices and a hassle-free experience."
            buttonText="Explore Our Inventory"
            path="/CarsForSale"/>

        <div className="container-fluid" style={{textAlign: "center", paddingTop: "5px", marginTop: "20px",paddingBottom: "20px", backgroundColor: "rgba(188, 247, 255, 0.56)"}}>
            <HeaderTopic text="Check Out The Wish List"/>
            <h5> Save your favorites for later!</h5>
        </div>

        {/* The Side Bar in The Larger Screen */}
        <div className="row d-flex justify-content-center">
        {isLargeScreen && favorites.length != 0 ? (
            <div onClick={() => setIsWarningBox(true)}  className="col-lg-4 d-none d-lg-flex overflow-auto d-flex  mt-3" style={{width: "490px", height: "100vh"}}>
                <div className="p-3" style={{width: "400px", backgroundColor: "rgb(233, 233, 233)", width: "435px", height: "115vh"}}>
                    <div className="text-center pt-3">
                        <h4><strong>🔹 Your WishList Toolbox</strong> </h4>
                        <h6> Manage your saved cars... </h6>
                        <hr />
                    </div>
                    <div className="wish-list-tab-content pt-3 d-flex justify-content-center" style={{flexDirection: "column"}}>
                    <h5>Filters <ChevronDown/></h5>
                        <div className="row d-flex justify-content-center pt-1">
                            <h6>Brands</h6>
                            <hr />
                                <div className="row">
                                    <CarTypesLinks type="BMW"/>
                                    <CarTypesLinks type="PORSCHE"/>
                                    <CarTypesLinks type="LAMBORGHINI"/>
                                    <CarTypesLinks type="FERRARI"/>
                                    <CarTypesLinks type="BENTLEY"/>
                                    <CarTypesLinks type="BUGATTI"/>
                                    <CarTypesLinks type="TOYOTA"/>
                                    <CarTypesLinks type="CHEVROLET"/>
                                    <CarTypesLinks type="ROLLS ROYCE"/>
                                    <CarTypesLinks type="DODGE"/>
                                    <CarTypesLinks type="BENZ"/>
                                    <CarTypesLinks type="PAGANI"/>
                                    <CarTypesLinks type="FORD"/>
                                    <CarTypesLinks type="TESLA"/>
                                    <CarTypesLinks type="JAGUAR"/>
                                    <CarTypesLinks type="VOLVO"/>
                                </div>
                            <h6>Price</h6>
                            <hr />
                                <div className="row">
                                    <CarTypesLinks type="$10,000"/>
                                    <CarTypesLinks type="$50,000"/>
                                    <CarTypesLinks type="$100,000"/>
                                    <CarTypesLinks type="$500,000"/>
                                </div>
                        </div>

                        <h5 className='pt-5'>Sort Options <ChevronDown/></h5>
                        <div className="row d-flex justify-content-center pt-1">
                            <div className="col-6 d-flex justify-content-center">
                                <button>Low To High</button>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <button>High To Low</button>
                            </div>
                            <div className="col-6 pt-2 d-flex justify-content-center">
                                <button>Newset First</button>
                            </div>
                            <div className="col-6 pt-2 d-flex justify-content-center">
                                <button>Model Year</button>
                            </div>
                        </div>

                        <h5 className='pt-5'>Sort Options <ChevronDown/></h5>
                        <div className="row d-flex justify-content-center pt-1">
                            <div className="col-6 d-flex justify-content-center">
                                <button>Select Car 01</button>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <button>Select Car 02</button>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="col-6 pt-2 d-flex justify-content-end align-items-center">
                                    <h6>Compare Now</h6>
                                </div>
                                <div className="col-6 pt-2 d-flex justify-content-flex-start align-items-center">
                                    <button style={{borderRadius: "10px"}}><LogIn/></button>
                                </div>
                            </div>
                        </div>

                        <h5 className='pt-5'>Quick Actions<ChevronDown/></h5>
                        <div className="row d-flex justify-content-center pt-1">
                            <div className="col-6 d-flex justify-content-center">
                                <button>Remove All</button>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <button>Shop More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        ) : (
        <>
        {/* The Toggle Button */}
        <button className='mt-3 menu-button' onClick={() => setShowCanvas(true)} style={{justifySelf: "center", width: "100%"}}>The Menu</button>

        {/* The OffCanvas at The Small Screen */}
        <div
            onClick={() => setIsWarningBox(true)} 
            className={`offcanvas offcanvas-start overflow-auto ${showCanvas ? "show" : ""}`}
            style={{marginTop: "190px", minWidth: "400px", height: "100vh"}}
            tabIndex="-1"
            role='dialog'>
            <div className="text-center pt-3" style={{backgroundColor: "rgb(241, 241, 241)", height: "130vh"}}>
                <h4><strong>🔹 Your WishList Toolbox</strong> </h4>
                <h6> Manage your saved cars... </h6>
                <hr />
                
                <button onClick={() => setShowCanvas(false)} className='d-flex justify-content-center align-items-center' style={{position: "absolute", border: "none", fontWeight: "bold", fontSize: "25px", top: "10px", right: "10px"}}><X/></button>

            </div>
            <div className="wish-list-tab-content pt-3 d-flex justify-content-center" style={{flexDirection: "column"}}>
            <h5>Filters <ChevronDown/></h5>
                <div className="row d-flex justify-content-center pt-1">
                    <h6>Brands</h6>
                    <hr />
                        <div className="row">
                            <CarTypesLinks type="BMW"/>
                            <CarTypesLinks type="PORSCHE"/>
                            <CarTypesLinks type="LAMBORGHINI"/>
                            <CarTypesLinks type="FERRARI"/>
                            <CarTypesLinks type="BENTLEY"/>
                            <CarTypesLinks type="BUGATTI"/>
                            <CarTypesLinks type="TOYOTA"/>
                            <CarTypesLinks type="CHEVROLET"/>
                            <CarTypesLinks type="ROLLS ROYCE"/>
                            <CarTypesLinks type="DODGE"/>
                            <CarTypesLinks type="BENZ"/>
                            <CarTypesLinks type="PAGANI"/>
                            <CarTypesLinks type="FORD"/>
                            <CarTypesLinks type="TESLA"/>
                            <CarTypesLinks type="JAGUAR"/>
                            <CarTypesLinks type="VOLVO"/>
                        </div>
                    <h6>Price</h6>
                    <hr />
                        <div className="row">
                            <CarTypesLinks type="$10,000"/>
                            <CarTypesLinks type="$50,000"/>
                            <CarTypesLinks type="$100,000"/>
                            <CarTypesLinks type="$500,000"/>
                        </div>
                </div>

                <h5 className='pt-5'>Sort Options <ChevronDown/></h5>
                <div className="row d-flex justify-content-center pt-1">
                    <div className="col-6 d-flex justify-content-center">
                        <button>Low To High</button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button>High To Low</button>
                    </div>
                    <div className="col-6 pt-2 d-flex justify-content-center">
                        <button>Newset First</button>
                    </div>
                    <div className="col-6 pt-2 d-flex justify-content-center">
                        <button>Model Year</button>
                    </div>
                </div>

                <h5 className='pt-5'>Sort Options <ChevronDown/></h5>
                <div className="row d-flex justify-content-center pt-1">
                    <div className="col-6 d-flex justify-content-center">
                        <button>Select Car 01</button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button>Select Car 02</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 pt-2 d-flex justify-content-end align-items-center">
                            <h6>Compare Now</h6>
                        </div>
                        <div className="col-6 pt-2 d-flex justify-content-flex-start align-items-center">
                            <button style={{borderRadius: "5px", padding: "3px 20px"}}><LogIn/></button>
                        </div>
                    </div>
                </div>

                <h5 className='pt-5'>Quick Actions<ChevronDown/></h5>
                <div className="row d-flex justify-content-center pt-1">
                    <div className="col-6 d-flex justify-content-center">
                        <button>Remove All</button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button>Shop More</button>
                    </div>
                </div>

            </div>
        </div>
        </>
        ) }
        
        {/* Main Content */}
        
        <div className="col-lg-8 col-xl-8 d-flex mt-2 col-11 wish-list-main-container">
         {favorites.length > 0 ? (
        favorites.map((car) => (
           <CarSellCard
            key={car.id}
            car={car}
            toggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))
      ) : (
            <div className="container d-flex justify-content-center mt-5" style={{flexDirection: "column", alignItems: "center"}}>
                <h3 style={{color: "black"}}><strong>No Favorite Cars Yet!</strong></h3>
                <p>Start adding the cars to your favorites then they will appear here!</p>
                <Link to="/CarsForSale">
                    <button id="normal-button" style={{margin: "0px", backgroundColor: "rgb(98, 156, 243)"}}>Look for Cars</button>
                </Link>
            </div>
      )}
        </div>
        </div>
        
        <div className="container mb-5 mt-0" style={{ maxWidth: "650px"}}>
            <div className="row" style={{textAlign: "center", display: "flex", alignItems: "center", height: "100px"}}>
                <div className="col-lg-6 col-6 col-md-6 text-center p-3">
                    <Link to="/CarsForSale">
                        <button id="normal-button">Shop More <FaShoppingCart/></button>
                    </Link>
                </div>
                <div className="col-lg-6 col-6 col-md-6 text-center p-3">
                    <button id="normal-button-inverse" onClick={() => setFavorites([])}>Clear Wish List <FaTimes/></button>
                </div>
            </div>
        </div>

        <div className="row" style={{backgroundImage: "linear-gradient(to right, rgb(32, 32, 32), rgb(0, 0, 0))",textAlign: "center", padding: "50px 0px"}}>
            <h2 style={{color: "white", fontSize: "28px"}}>You May Also Like</h2>
            <div className="d-flex justify-content-center" style={{backgroundImage: "linear-gradient(to right, rgb(32, 32, 32), rgb(0, 0, 0))", padding: "20px", marginBottom: "10px", borderRadius: "10px"}}>
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

        <div className="container" style={{marginTop: "40px", marginBottom :"40px", maxWidth: "900px"}}>
            <HeaderTopic text="Share Your Wish List with Your Friends"/>
            <div className="row" onClick={() => setIsWarningBox(true)} style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                <div className="col-lg-6 col-12 col-md-6 text-center p-3">
                <h6 style={{marginTop: "20px", marginBottom: "0px"}}>Enter the E-Mail here...</h6>
                    <input id="input-box" type="text" style={{width: "100%"}}/>
                        <div>
                            <button id="submit-button" style={{display: "inline-flex", padding: "0px 10px", width: "100px", alignItems: "center", justifyContent: "center", height: "30px"}}>
                                <strong>Send<FaPaperPlane style={{marginLeft: "10px"}}/></strong>
                            </button>
                        </div>
                </div>
                
                <div className="col-lg-6 col-12 col-md-6 text-center" style={{textAlign: "center"}}>
                    <div className="d-flex justify-content-center" style={{gap: "30px", textAlign: "center"}}>
                            <a id="social-media-icons" href="#" style={{textDecoration: "none", color: "rgb(191, 26, 241)"}}>
                                <FaInstagram size="40px"/>
                            </a>
                            <div style={{height: "40px", backgroundColor: "rgb(56, 56, 56)", width: "2px"}}></div>
                            <a id="social-media-icons" href="#" style={{textDecoration: "none", color: "rgb(8, 139, 8)"}}>
                                <FaWhatsapp size="40px"/>
                            </a>
                            <div style={{height: "40px", backgroundColor: "rgb(56, 56, 56)", width: "2px"}}></div>
                            <a id="social-media-icons" href="#" style={{textDecoration: "none", color: "rgb(30, 120, 194)"}}>
                                <FaTwitter size="40px"/>
                            </a>
                            <div style={{height: "40px", backgroundColor: "rgb(56, 56, 56)", width: "2px"}}></div>
                            <a id="social-media-icons" href="#" style={{textDecoration: "none", color: "rgb(23, 159, 212)"}}>
                                <FaFacebook size="40px"/>
                            </a>
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* The LightBox Comopnent */}
      { isWarningBox && (
          <div className="coming-soon-box" style={{maxWidth: "400px", width: "100%", zIndex: "2000"}}>
              <div className="d-flex justify-content-center align-items-center" style={{width: "100%"}}>
                  <Hourglass className='hour-glass'/>
                  <div className='heading'> Coming Soon!</div>
              </div>
              <button className='close-button' onClick={() => setIsWarningBox(false)}><X/></button>
              <div className='hrzntl-line'></div>
              
              <p>Oops! Sharing the wish list is a part of this UI demo and not connected to a real database</p>
              <button className='gotcha-btn' onClick={() => setIsWarningBox(false)}>Gotcha!</button>
          </div>
          
      ) }

        <TheFooter/>
        </>
    );
}
export default WishList;
