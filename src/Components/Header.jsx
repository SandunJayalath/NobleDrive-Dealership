import NormalButton from "./NormalButton";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/header-image.png'

function Header() {

    return (
        <>
        <div id="hero" className="d-flex" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="container-fluid img-fluid d-flex justify-content-center" style={{textAlign: "center", flexDirection: "column", width: "100%"}}>
                    <h1 className="fw-bold">Drive Your Dream Car Today!</h1>
                    <div className="align-items-center" style={{alignItems: "center"}}>
                        <p className="text-lg-center text-sm-right text-md-center">Explore the best deals on luxury, sports, and everyday cars. Your perfect ride is just a click away.</p>
                        <div style={{gap: "10px"}}>
                            <Link to="/CarsForSale">
                                <button id="cta-button">Browse Cars</button>
                            </Link>
                            <Link to="/AboutUs">
                                <button id="cta-button">About Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;