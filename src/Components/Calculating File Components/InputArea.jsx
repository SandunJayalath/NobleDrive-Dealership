import PropTypes from 'prop-types'

function InputArea(props){
    return(
        <>
        <input type="text" value={props.value} id="input-areas" onChange={props.onChange}/>
        <h6>{props.statement}</h6>
        </>
    );
}
InputArea.propTypes = {
    statement: PropTypes.string,
}
export default InputArea;