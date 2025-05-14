import NormalButton from './NormalButton';
import PropTypes from 'prop-types'

function CollapseContainer(props){
    return(
        <>
        <p className="d-inline-flex gap-1" style={{marginTop: "100px", marginLeft: "5%", fontFamily: "Tilt Neon"}}> 
            <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            {props.text}
            </button>
        </p>
        <div className="collapse" id="collapseExample">
            <div className="card card-body">
                {props.content}
            </div>
        </div>
        </>
    );
}
export default CollapseContainer;