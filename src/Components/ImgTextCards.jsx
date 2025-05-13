import PropTypes from 'prop-types';
import React from 'react';

function ImgTextCards(props){

    return(
        <div className="container-fluid d-flex justify-content-center">
        <div className="card mb-1" id="img-txt-card">
            <div className="row g-0 d-flex justify-content-center">
                {props.styledIcon}
                
            <div className="card-body">
                <hr />
                <h5 style={{color: "rgb(6, 48, 107)", margin: "10px", textAlign: "center", fontSize: "22px"}}><strong>{props.heading}</strong></h5>
                <p className="card-text" style={{fontFamily: "Tilt Neon", color: "black", fontSize: "18px"}}>{props.paragraph}</p>
            </div>
            </div>
        </div>
        </div>
    );
}
export default ImgTextCards;