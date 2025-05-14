import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import SpecialButton from './SpecialButton';
import { FaHeart } from "react-icons/fa";

function CarSellCard({car, toggleFavorite, isFavorite}){

    return(
    <>
    <Link to={car.path} style={{textDecoration: "none"}}>
      <div className="container mt-4" id ="car-selling-component">
        <div className="card border-0">
          <div className="row g-0 d-flex flex-column flex-md-row align-items-center">
            {/* Image Section */}
            <div className="col-md-4" style={{overflow: "hidden"}}>
              <img src={car.url} alt="CarImage" style={{width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "10px"}}/>
            </div>
            {/* Content Section */}
            <div className="col-md-8 p-lg-3 p-xl-3 p-0" style={{position: "relative"}}>
              <h3 style={{position: "absolute", right: "0px", textAlign: "right", marginRight: "10px", webkitTextFillColor: "#ff1e4e", top: "10px", fontSize: "27px"}}><strong>{car.price}</strong></h3>
              <div className="card-body" style={{textAlign: "left"}}>
                <h5 style={{fontSize: "25px"}} className="card-title"><strong>{car.name}</strong></h5>
                <h5 style={{webkitTextFillColor: "rgb(48, 48, 48)"}}><strong>{car.year}</strong></h5>
                <h6 className="card-text" style={{fontSize: "16px", webkitTextFillColor: "rgb(43, 43, 43)"}}>{car.description}</h6>
                
                <div className="d-flex" style={{height: "30px", alignItems: "center", gap: "10px"}}>
                  <h6><strong>{car.fuelType}</strong></h6>
                  <div style={{width: "2px", height: "100%", backgroundColor: "rgb(0, 0 ,0)"}}></div>
                  <h6><strong>{car.transmission}</strong></h6>
                </div>

                <div className="row gap-3 d-flex justify-content-left" style={{textAlign: "center", margin: "20px 0px"}}>
                  <h5 style={{fontWeight: "bold", padding: "5px", width: "130px", borderRadius: "5px", backgroundColor: "rgba(2, 112, 255, 0.36)"}}>{car.mileage}</h5>
                  <h5 style={{fontWeight: "bold", padding: "5px", width: "80px", borderRadius: "5px", backgroundColor: "rgba(2, 112, 255, 0.36)"}}>{car.color}</h5>
                  <h5 style={{fontWeight: "bold", padding: "5px", width: "60px", borderRadius: "5px", backgroundColor: "rgba(2, 112, 255, 0.36)"}}>{car.condition}</h5>
                </div>

                <button id="saving-button" onClick={(e) => {e.preventDefault(); toggleFavorite(car)}}>{isFavorite ? <FaHeart className="heart-icon"/> : "🤍"}</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </>
    );}

export default CarSellCard;