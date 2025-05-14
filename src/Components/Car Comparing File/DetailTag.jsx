import PropTypes from 'prop-types';

function DetailTag (props) {
    return (
        <>
        <div className="d-flex gap-3" style={{fontFamily: "Poppins", alignItems: "center"}}>
            <h5><strong>{props.quality}</strong></h5>
            <h6>{props.type}</h6>
        </div>
        </>
    );
}
export default DetailTag;
