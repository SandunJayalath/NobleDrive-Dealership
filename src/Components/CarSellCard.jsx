import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import SpecialButton from './SpecialButton';
import { FaHeart } from "react-icons/fa";

function CarSellCard({car, toggleFavorite, isFavorite}){

    return(
    <>
    <Link to={car.path} style={{textDecoration: "none"}}>
      <div className="container mt-4" id ="car-selling-component"  style={{position: "relative"}}>
        <div className="card border-0">
          <div className="row g-0 d-flex align-items-center">
            {/* Image Section */}
            <div className="col-md-4 car-card-header-image" style={{overflow: "hidden", backgroundImage: `url(${car.url})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            </div>

            {/* Content Section */}
            <div className="col-md-8 p-lg-3 p-xl-3 p-0 d-flex align-items-center">
              <h3><strong>{car.price}</strong></h3>
              <div className="card-body d-flex justify-content-center  gap-1" style={{textAlign: "left", flexDirection: "column"}}>
                <h5 style={{fontSize: "25px"}} className="card-title"><strong>{car.name}</strong></h5>
                <h5 style={{webkitTextFillColor: "rgb(48, 48, 48)"}}><strong>{car.year}</strong></h5>
                <h6 className="card-text" style={{fontSize: "16px", webkitTextFillColor: "rgb(43, 43, 43)"}}>{car.description}</h6>
                
                <div className="d-flex quality" style={{height: "30px", alignItems: "center", gap: "10px"}}>
                  <h6><strong>{car.fuelType}</strong></h6>
                  <div style={{width: "2px", height: "100%", backgroundColor: "rgb(54, 54, 54)"}}></div>
                  <h6><strong>{car.transmission}</strong></h6>
                </div>

                <div className="row d-flex gap-3 ps-2" style={{textAlign: "center", marginTop: "17px", justifyContent: "flex-start"}}>
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