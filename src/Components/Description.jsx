import PropTypes from 'prop-types';

function Description(props){
    return(
        <div className="container-fluid d-flex justify-content-center">
            <p id="description">
            {props.paragraph}
            </p>
        </div>
    );
}
Description.propTypes = {
    paragraph: PropTypes.string,
}
export default Description;

