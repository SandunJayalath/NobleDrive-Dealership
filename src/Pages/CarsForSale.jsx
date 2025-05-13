import NavBar from "../Components/NavBar";
import CarsCards from "../Components/CarsCards";
import Header from "../Components/Header";
import NormalButton from "../Components/NormalButton";
import HeaderTopic from "../Components/HeaderTopic";
import Topics from "../Components/Topics";
import PropTypes from 'prop-types'
import CollapseContainer from "../Components/CollapseContainer";
import CarTypesLinks from "../Components/CarTypesLinks";
import TheFooter from "../Components/TheFooter";
import CarSellCard from "../Components/CarSellCard";
import FilterByColorCircles from "../Components/FilterByColorCircles";
import { Filter } from 'lucide-react';
import { Hourglass } from 'lucide-react';
import { X } from 'lucide-react';
import { Search } from 'lucide-react';
import bmw from '../assets/bmwLogo.png'
import lambo from '../assets/lambo.png'
import benz from '../assets/benzLogo.png'

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../styles/CarsForSale.css'

const CarsForSale = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Handle window resize to toggle between sidebar and offcanvas
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Adding Dollar sign

  const [presentValue, setPresentValue] = useState("");

  const formatCurrency = (value) => {
    if (!value) return "";
      return "$" + parseFloat(value.replace(/[^0-9.-]+/g, "")).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const parseCurrency = (value) => {
    return value.replace(/[^0-9.-]+/g, "");
  }

  const handlePresentValueChange = (e) => {
    const value = e.target.value;
    setPresentValue(formatCurrency(value));
  };


  // Cars Array and The Search Bar

  const cars = [
    {id: 1, path: "/SingleProduct", url: "https://th.bing.com/th/id/OIP.0m2hnpY-ax7svRf6Ct3pCgHaFj?rs=1&pid=ImgDetMain", price: "$30,000", name: "BMW M3", year: "2018", description: "White Color BMW Well Used Super features Car",
     fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "Used",
    },
    {id: 2, path: "/SingleProduct", url: "https://th.bing.com/th/id/OIP.leJwpzGbZmZQ3N5fb-MrxAHaE6?rs=1&pid=ImgDetMain", price: "$300,000", name: "CAMARO", year: "2008", description: "Yellow Color Camaro Well Used Super features Car",
      fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "New",
     },
     {id: 3, path: "/SingleProduct", url: "https://th.bing.com/th/id/OIP.FjJwyHtjHdNdc-HJ-MuaSwHaFf?rs=1&pid=ImgDetMain", price: "$230,000", name: "Lamborghini", year: "2020", description: "Great Color Lamborghini Well Used Super features Car",
      fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "Used",
     },
     {id: 4, path: "/SingleProduct", url: "https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", price: "$30,000", name: "BMW W3", year: "2018", description: "White Color BMW Well Used Super features Car",
      fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "New",
     },
     {id: 5, path: "/SingleProduct", url: "https://th.bing.com/th/id/OIP.4w3BCeTHYtmZZ-YAOtozVQHaFj?rs=1&pid=ImgDetMain", price: "$310,000", name: "FERRARI", year: "2008", description: "Light Color Ferrari Well Used Super features Car",
      fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "Used",
     },
     {id: 6, path: "/SingleProduct", url: "https://th.bing.com/th/id/OIP.YHxcrdneT3Lw3SthJ5NdbQHaFj?rs=1&pid=ImgDetMain", price: "$310,000", name: "PORSCHE gt3RS", year: "2019", description: "White Color BMW Well Used Super features Car",
      fuelType: "Petrol", transmission: "Manual", mileage: "35,000 km", color: "White", condition: "New",
     }
  ]

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars)

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    const results = cars.filter(car => 
      car.name.toLowerCase().includes(query)
    );
    setFilteredCars(results);
  }

  const filterCars = cars.filter(car =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const carCount =
    filterCars.length < 10 ?  `0${filterCars.length}` : filterCars.length;

  // For the favorites
  const [favorites, setFavorites] = useState(() => {
  try {
    const saved = JSON.parse(localStorage.getItem("favorites"));
    return Array.isArray(saved) ? saved : [];
  } catch (e) {
    return [];
  }
});


const toggleFavorite = (car) => {
  const isFav = favorites.some((fav) => fav.id === car.id);
  let updatedFavorites;

  if (isFav) {
    updatedFavorites = favorites.filter((fav) => fav.id !== car.id);
  } else {
    updatedFavorites = [...favorites, car];
  }

  setFavorites(updatedFavorites);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};

  // The Error Message
  const [isWarningBox, setIsWarningBox] = useState(false)

  return (
    <>
    <div style={{marginBottom: "76px"}}><NavBar/></div>
    <div className="pages">
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar - Always visible on large screens */}
        {isLargeScreen ? (
          <div onClick={() => setIsWarningBox(true)} className="col-lg-3 d-none d-lg-block p-3 overflow-auto" style={{backgroundColor: "rgba(221, 220, 220, 0.79)", height: "100vh"}}>
            <div className="row d-flex justify-content-center" style={{margin: "10px"}}>
                <h5 style={{color: "rgb(0, 89, 255)", marginBottom: "15px", textAlign: "center"}}><strong>FIltering Makes It Easy</strong></h5>
                 <div id="filter-thing" className="col-12 col-md-6 col-lg-6 col-xl-6" style={{padding: "20px"}}>
                    <h5 style={{textAlign: "center", marginBottom: "10px", color: "black"}}><strong>Shop By The Brands</strong></h5>
                      <hr/>
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
                     <CarTypesLinks type="VOLVO"/></div>
                 </div>
                  <h6 style={{textAlign: "center", marginBottom: "20px"}}>You may also Like!</h6>
                    <img className="hovering-get-large" src={bmw} style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                    <img className="hovering-get-large" src={benz} style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                    <img className="hovering-get-large" src={lambo} style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                    <img className="hovering-get-large" src="https://pngimg.com/uploads/bentley/bentley_PNG34.png" style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                    <img className="hovering-get-large" src="https://th.bing.com/th/id/R.9890c04e5df9d5113f1876dd006d92c4?rik=wpoH0vwX7o7dpA&pid=ImgRaw&r=0" style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                    <img className="hovering-get-large" src="https://th.bing.com/th/id/OIP.g_Hit3U21deQ5l6A6Uf5ugHaHn?rs=1&pid=ImgDetMain" style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>

                 <div id="filter-thing" className="col-12 col-md-6 col-lg-6 col-xl-6" style={{padding: "20px", marginTop: "40px"}}>
                  <h5 style={{textAlign: "center", marginBottom: "10px", color: "black"}}><strong>Shop By The Types</strong></h5>
                    <hr />
                 <div className="row">
                     <CarTypesLinks type="COUPES"/>
                     <CarTypesLinks type="SEDANS"/>
                     <CarTypesLinks type="SPORTS"/>
                     <CarTypesLinks type="FAMILY"/>
                     <CarTypesLinks type="SUV"/>
                     <CarTypesLinks type="PU TRUCKS"/>
                     <CarTypesLinks type="HATCHBACKS"/>
                     <CarTypesLinks type="CROSSOVER"/></div>
                 </div>

                 <div id="filter-thing" className="col-12 col-md-6 col-lg-6 col-xl-6" style={{padding: "20px"}}>
                  <h5 style={{textAlign: "center", marginBottom: "10px",color: "black"}}><strong>Shop By The Price</strong></h5>
                  <hr />
                 <div className="row">
                     <CarTypesLinks type="$10,000"/>
                     <CarTypesLinks type="$100,000"/>
                     <CarTypesLinks type="$500,000"/>
                     <CarTypesLinks type="$10,000,000"/></div>
                 </div>

                <div id="filter-thing" className="col-12 col-md-6 col-lg-6 col-xl-6" style={{padding: "20px"}}>
                  <h5 style={{textAlign: "center", marginBottom: "10px", color: "black"}}><strong>Shop By The Colors</strong></h5>
                  <hr />
                  <div className="row d-flex justify-content-center">
                    <FilterByColorCircles bgColor="Black"/>
                    <FilterByColorCircles bgColor="LightBlue"/>
                    <FilterByColorCircles bgColor="Red"/>
                    <FilterByColorCircles bgColor="Green"/>
                    <FilterByColorCircles bgColor="Gray"/>
                    <FilterByColorCircles bgColor="White"/>
                    <FilterByColorCircles bgColor="DarkBlue"/>
                    <FilterByColorCircles bgColor="DarkRed"/>
                    <FilterByColorCircles bgColor="DarkGray"/>
                    <FilterByColorCircles bgColor="Purple"/>
                  </div>
                  </div>

                  <div id="filter-thing" className="col-12 col-md-6 col-lg-6 col-xl-6" style={{padding: "20px"}}>
                  <h5 style={{textAlign: "center", marginBottom: "10px", color: "black"}}><strong>Shop By Smart Filtering</strong></h5>
                  <hr />

                  <div className="row" style={{textAlign: "center"}}>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <h6 style={{margin: "15px"}}>BRAND</h6>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <input id="smart-filtering-text-areas" type="text" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <h6 style={{margin: "15px"}}>COLOR</h6>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <input id="smart-filtering-text-areas" type="text" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <h6 style={{margin: "15px"}}>PRICE RANGE</h6>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <input value={presentValue} id="smart-filtering-text-areas"  onChange={handlePresentValueChange}/>
                    </div>

                    <div className="col-12 col-lg-12 col-xl-12" style={{textAlign: "center"}}>
                      <button id="submit-button" style={{width: "100%", height: "35px", display: "flex", justifyContent: "center"}}><strong>Search</strong></button>
                    </div>

                  </div>
                  </div>
                
            </div>
          </div>
        ) : (
          <>
            {/* Toggle Button for Small Screens */}
            
              <button id="filtering-button" className="btn" onClick={() => setShowOffcanvas(true)}>
                <Filter style={{strokeWidth: "3px", stroke: "white"}}/>
              </button>
              
            {/* Offcanvas Component for Small Screens */}
            <div
              onClick={() => setIsWarningBox(true)}
              className={`offcanvas offcanvas-start ${showOffcanvas ? "show" : ""}`}
              style={{marginTop: "76px", width: "350px", backgroundColor: "rgb(236, 236, 236)"}}
              tabIndex="-1"
              role="dialog"
            >
              <div className="offcanvas-header" style={{borderRadius: "10px", backgroundColor: "rgba(211, 211, 211, 0.57)", marginTop: "10px"}}>
                <h5 style={{marginTop: "10px", color: "rgb(0, 82, 204)"}}><strong>FIltering Makes It Easy</strong></h5>
            
              <button
                type="button"
                className="btn-close"
                width= "100px"
                onClick={() => setShowOffcanvas(false)}
              ></button>
         
              </div>
              <div className="offcanvas-body">
              <div id="filter-thing" className="col-12 col-md-12 col-lg-6 col-xl-6 " style={{padding: "20px"}}>
                    <h5 style={{textAlign: "center", marginBottom: "10px", color: "black"}}><strong>Shop By The Brands</strong></h5>
                      <hr/>
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
                 </div>
                 <h6 style={{textAlign: "center", marginBottom: "20px"}}>You may also Like!</h6>
                 <div className="container" style={{textAlign: "center"}}>
                  <img className="hovering-get-large" src={bmw} style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                  <img className="hovering-get-large" src={benz} style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                  <img className="hovering-get-large" src={lambo} style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                  <img className="hovering-get-large" src="https://pngimg.com/uploads/bentley/bentley_PNG34.png" style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                  <img className="hovering-get-large" src="https://th.bing.com/th/id/R.9890c04e5df9d5113f1876dd006d92c4?rik=wpoH0vwX7o7dpA&pid=ImgRaw&r=0" style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                  <img className="hovering-get-large" src="https://th.bing.com/th/id/OIP.g_Hit3U21deQ5l6A6Uf5ugHaHn?rs=1&pid=ImgDetMain" style={{height: "50px", width: "auto", margin: "8px"}} alt=""/>
                  </div>

                 <div id="filter-thing" className="col-12 col-md-12 col-lg-6 col-xl-6" style={{padding: "20px", marginTop: "40px"}}>
                  <h5 style={{textAlign: "center", marginBottom: "10px", color: "black"}}><strong>Shop By The Types</strong></h5>
                    <hr />
                 <div className="row">
                     <CarTypesLinks type="COUPES"/>
                     <CarTypesLinks type="SEDANS"/>
                     <CarTypesLinks type="SPORTS"/>
                     <CarTypesLinks type="FAMILY"/>
                     <CarTypesLinks type="SUV"/>
                     <CarTypesLinks type="PU TRUCKS"/>
                     <CarTypesLinks type="HATCHBACKS"/>
                     <CarTypesLinks type="CROSSOVER"/></div>
                 </div>

                 <div id="filter-thing" className="col-12 col-md-12 col-lg-6 col-xl-6" style={{padding: "20px"}}>
                  <h5 style={{textAlign: "center", marginBottom: "10px",color: "black"}}><strong>Shop By The Price</strong></h5>
                  <hr />
                 <div className="row">
                     <CarTypesLinks type="$10,000"/>
                     <CarTypesLinks type="$100,000"/>
                     <CarTypesLinks type="$500,000"/>
                     <CarTypesLinks type="$10,000,000"/></div>
                 </div>

                <div id="filter-thing" className="col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center" style={{padding: "20px", flexDirection: "column"}}>
                  <h5 style={{textAlign: "center", marginBottom: "10px", color: "black"}}><strong>Shop By The Colors</strong></h5>
                  <hr />
                  <div className="row d-flex justify-content-center">
                    <FilterByColorCircles bgColor="Black"/>
                    <FilterByColorCircles bgColor="LightBlue"/>
                    <FilterByColorCircles bgColor="Red"/>
                    <FilterByColorCircles bgColor="Green"/>
                    <FilterByColorCircles bgColor="Gray"/>
                    <FilterByColorCircles bgColor="White"/>
                    <FilterByColorCircles bgColor="DarkBlue"/>
                    <FilterByColorCircles bgColor="DarkRed"/>
                    <FilterByColorCircles bgColor="DarkGray"/>
                    <FilterByColorCircles bgColor="Purple"/>
                  </div>
                 </div>

                 <div id="filter-thing" className="col-12 col-md-12 col-lg-6 col-xl-6" style={{padding: "20px"}}>
                  <h5 style={{textAlign: "center", marginBottom: "10px", color: "black"}}><strong>Shop By Smart_Filtering</strong></h5>
                  <hr />

                  <div className="row" style={{textAlign: "center"}}>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <h6>BRAND</h6>    
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <input id="smart-filtering-text-areas" type="text" style={{margin: "0px"}}/>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6" style={{marginTop: "20px"}}>
                      <h6>COLOR</h6>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <input id="smart-filtering-text-areas" type="text" style={{margin: "0px"}}/>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6" style={{marginTop: "20px"}}>
                      <h6>PRICE RANGE</h6>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-6">
                      <input value={presentValue} id="smart-filtering-text-areas" style={{margin: "0px"}}  onChange={handlePresentValueChange}/>
                    </div>

                    <div style={{textAlign: "center"}}>
                      <button id="submit-button" style={{width: "100%", height: "35px", display: "flex", justifyContent: "center"}}><strong>Search</strong></button>
                    </div>

                  </div>
                  </div>
            </div>
          </div>
          </>
        )}

      {/* Main Content */}
      <div className="col overflow-auto p-4" style={{height: "100vh", width: "100%", position: "relative"}}>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row searching-container" style={{display: "flex", backgroundColor: "rgb(27, 27, 27)", padding: "10px", margin: "0px", zIndex: "2", maxHeight: "200px", maxWidth: "1000px", position: "fixed"}}>
                <div className="col-12 col-md-4 col-lg-4 p-3 d-flex justify-content-center">
                  <div className="car-amount" style={{color: "rgb(255, 255, 255)", fontFamily: "Poppins"}}><strong>{carCount} {""} Cars Found</strong></div>
                </div>
                <div className="col-12 col-md-8 col-lg-8 text-center py-3 d-flex justify-content-center search-component-container">
                <form onSubmit={handleSearch} style={{display: "flex"}}>
                  <input id="search-bar" type="text" placeholder="Search The Car..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                  <button id="search-button"  type="submit" className="px-3 py-0" ><strong><Search style={{color: "white", marginRight: "10px"}}/><div className="d-none d-lg-block d-xl-block">Search</div></strong></button>
                </form>
                </div>
            </div>

        </div>
     
  <div id="car-sell-card-container">
    {filteredCars.length > 0 ? (
      filteredCars.map((car) => (
      <CarSellCard key={car.id} car={car} toggleFavorite={toggleFavorite} isFavorite={favorites.some(fav => fav.id === car.id)}/>
    ))
    ) : (
      <div className="container d-flex mt-5" style={{justifyContent: "center", alignItems: "center", color: "rgb(172, 13, 13)"}}>
        <h2><strong>No Results Found!</strong></h2>
      </div>
      
    )}
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
              
              <p>Oops! 🔧 Filters are part of this UI demo and not connected to a real database</p>
              <button className='gotcha-btn' onClick={() => setIsWarningBox(false)}>Gotcha!</button>
          </div>
          
      ) }

    </>
  );
};

export default CarsForSale;
