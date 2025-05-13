import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function NormalButton(props){

    return(
        <>
        <div className='d-flex justify-content-center' style={{width: "100%"}}>
        <Link className="d-flex justify-content-center nav-link" to={props.path} style={{textDecoraion: "none", width: "50%"}}>
            <button id="normal-button">{props.text}</button>
        </Link>
        </div>
        </>
    );

}
NormalButton.propTypes = {
    text: PropTypes.string,
} 
export default NormalButton;