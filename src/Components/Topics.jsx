import PropTypes from 'prop-types'

function Topics(props){
    return(
        <>
        <div className="container-fluid">
            <h3 className="align-left" id="topic" style={{color: "rgb(6, 48, 107)", fontSize: "28px", marginTop: "0px", marginBottom: "0px"}}><strong>{props.text}</strong></h3>
        </div>
        </>
    );
}
Topics.propTypes = {
    text: PropTypes.string,
}

export default Topics;