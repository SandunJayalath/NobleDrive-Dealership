import PropTypes from 'prop-types'
import { MousePointerClick } from 'lucide-react';

function SpecialCards(props){
    return(
        <>
        <div className="col-6 col-md-3 col-lg-3 col-xl-3">
        <a href={props.path} style={{textDecoration: "none"}}>
                <div id="car-brands-cards"  className="card align-items-center d-flex justify-content-center" style={{display: "flex", alignItems: "center", textAlign: "center", marginTop: "0px", backgroundImage: "linear-gradient(to right, red, purple)", color: "white", height: "230px", margin: "10px"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        {props.img}
                    </div>
                <div class="card-body mt-2">
                    <h4 class="card-title-bottom d-flex justify-content-center" style={{fontSize: "20px"}}><strong>{props.text}</strong></h4>
                </div>
                </div>
        </a>
        </div>
        </>
    );
}
SpecialCards.propTypes = {
    text: PropTypes.string,
}

export default SpecialCards;