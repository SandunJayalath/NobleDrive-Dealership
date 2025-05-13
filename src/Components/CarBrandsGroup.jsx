import PropTypes from 'prop-types'
import { useState } from 'react';
import { Hourglass } from 'lucide-react';
import { X } from 'lucide-react';

function CarBrandsGroup(props){

    const [isWarningBox, setIsWarningBox] = useState(false)
    
    return(
        <>
        
        <div className="col-4 col-md-3 col-lg-2 col-xl-2">
        <a onClick={() => setIsWarningBox(true)} style={{textDecoration: "none", cursor: "pointer"}}>
            <div id="car-brands-cards" class="card align-items-center d-flex justify-content-center" style={{alignItems: "center"}}>
                <img className="card-img-top" src={props.carImage} alt="Car Logo" style={{}}/>
            <div class="card-body" style={{width: "100%"}}>
                <h4 id="car-brand-name" className="card-title-bottom d-flex justify-content-center" style={{fontSize: "17px", margin: "0px"}}><strong>{props.carName}</strong></h4>
            </div>
            </div>
            </a>
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
                
                <p>Oops! This section isn't quite ready yet. I'm putting the finishing touches on it, check back soon!</p>
                <button className='gotcha-btn' onClick={() => setIsWarningBox(false)}>Gotcha!</button>
            </div>
            
        ) }

        </>
    );
}
CarBrandsGroup.propTypes = {
    carName: PropTypes.string,
    carImage: PropTypes.string,
}

export default CarBrandsGroup;
