import PropTypes from 'prop-types';

function ProductSpecificTag(props) {
    return (
        <>
        <div id="product-specific-tag" className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" style={{margin: "0px 0px"}}>
            <div className="d-flex justify" style={{justifyContent: "flex-start", alignItems: "center", gap: "8px", margin: "0px 0px "}}>
                {props.icon}<h5 style={{margin: "0"}}><strong>{props.spec}</strong></h5>
                <h6 style={{margin: "0"}}>{props.type}</h6>
            </div>
            <hr/>
        </div>
        </>
    );
}
export default ProductSpecificTag;