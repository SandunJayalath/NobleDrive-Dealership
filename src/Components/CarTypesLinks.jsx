import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CarTypesLinks(props){
    return(
        <>
        <div className="col-6 col-md-6 col-lg-12 col-sm-12 col-xl-6 my-md-2 my-lg-2 my-lg-2">
        <Link to="#" style={{textDecoration: "none"}}>
            <h4 id="car-brand-name" style={{textAlign: "center", fontSize: "15px"}}><strong>{props.type}</strong></h4>
        </Link>
        </div>
        </>
    );
}
CarTypesLinks.propTypes = {
    type: PropTypes.string,
}
export default CarTypesLinks;