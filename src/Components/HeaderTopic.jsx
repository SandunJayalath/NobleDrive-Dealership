import PropTypes from 'prop-types'
import React, {useEffect, useRef} from 'react';
import { setupObserver } from "../jsFiles/animation/";

function HeaderTopic(props){

    const containerRef = useRef(null);

    useEffect(() => {
        const cleanup = setupObserver([containerRef.current]);
        return () => cleanup();
    }, []);

    return(
        <>
        <div ref={containerRef} className="col col-md-8 mx-auto hidden">
            <h3 className="d-flex justify-content-center" id="header-topic" style={{color: "rgb(2, 41, 92)", fontFamily: "sans-serif", textAlign: "center", marginTop: "40px"}}><strong>{props.text}</strong></h3>
        </div>
        </>
    );
}
HeaderTopic.propTypes = {
    text: PropTypes.string,
}

export default HeaderTopic;
