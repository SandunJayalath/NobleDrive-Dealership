import PropTypes from 'prop-types';
import SpecialButton from './SpecialButton';
import { FaHeart } from "react-icons/fa";
import { Settings2 } from 'lucide-react';
import { FaGasPump } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Armchair  } from 'lucide-react';

function SubCarCard(props){

    return(
    <>
    <div className="container" id ="sub-car-selling-component">
      <div className="card border-0">
        <div className="row g-0 d-flex flex-column flex-md-row align-items-center">
          {/* Image Section */}
          <div className="col-md-12" style={{height: "270px", width: "100%", overflow: "hidden", padding: "10px"}}>
            <img src={props.carImage} alt="CarImage" className="img-fluid" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
          </div>
          {/* Content Section */}
          <div className="col-md-12" style={{width: "100%"}}>
            <div className="card-body sub-car-body d-flex" style={{textAlign: "left", flexDirection: "column"}}>              
              {/* <div className="container-fluid" style={{display: "grid", gridTemplateColumns: "0fr auto 1fr"}}>
                <div></div>
                <h5 style={{fontSize: "25px"}} className="card-title"><strong>{props.carName}</strong></h5>
                <h3 style={{textAlign: "right", WebkitTextFillColor: "#ff1e4e", fontSize: "25px"}}><strong>{props.price}</strong></h3>
              </div>

              <h6 style={{fontSize: "16px", padding: "10px", marginRight: "0px"}}>{props.description}</h6>
              
            <div className="container-fluid" style={{display: "grid", gridTemplateColumns: "0fr auto 1fr"}}>
                <div></div>
                <button id="learn-more-cars" style={{justifySelf: "left"}}>Learn More</button>
                <button id="saving-button" style={{justifySelf: "end"}}><FaHeart className="heart-icon"/></button>
            </div>   */}
              <h5>{props.carName}</h5>
              <h6>{props.description}</h6>
              <h3>{props.price}</h3>
              <div className="row d-flex mb-3 px-2" style={{justifyContent: "space-between"}}> 
                <div className="col-3 tag">
                  <Settings2/>Auto
                </div>
                <div className="col-3 tag">
                  <FaGasPump style={{marginRight: "4px"}}/>Petrol
                </div>
                <div className="col-4 tag">
                  <Armchair/>{props.seats}Seats
                </div>
              </div>
              <Link to="/CarsForSale" style={{textDecoration: "none"}}>
                <button>View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );}

export default SubCarCard;