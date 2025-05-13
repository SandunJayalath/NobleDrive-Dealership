import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function SpecialButton(props){

    return(
        <>
        <Link className="d-flex justify-content-center nav-link" to={props.path} style={{textDecoraion: "none"}}>
            <button id="special-button"><strong>{props.text}</strong></button>
        </Link>
        </>
    );

}
SpecialButton.propTypes = {
    text: PropTypes.string,
} 
export default SpecialButton;