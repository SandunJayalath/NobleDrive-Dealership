import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const FilterByColorCircles = ({path, bgColor}) => {
    const customColor = {
        backgroundColor: bgColor || "gray"
    };
    return(
        <>
        <a href="#" className=" col-lg-2 col-md-4 col-sm-6 col-xs-6 col-4 text-center p-3" style={{textAlign: "center"}}>
            <div id="filtering-color-circles"  style={customColor}>
            </div>
        </a>
        </>
        );
}

    
export default FilterByColorCircles;
