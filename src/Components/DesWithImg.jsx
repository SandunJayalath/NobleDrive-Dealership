import PropTypes from 'prop-types';
import Topics from './Topics';
import Description from './Description';

function DesWithImg(props){

    return(
    <>
    <div className="container" id="des-with-img">
        <img src={props.pathToimg} alt="An Image"/>
        <Topics text={props.topic}/>
        <p>{props.paragraph}</p>
    </div>
    </>
    );
}
Description.propTypes = {
    topic: PropTypes.string,
    paragraph: PropTypes.string,
}
export default DesWithImg;