import PropTypes from 'prop-types'

function HeaderImage({ backgroundImage, heading, paragraph, buttonText, path }) {

    const boxStyle = {
      marginTop: "76px",
      position: "relative",
      backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <>
        <div id="header" className="d-flex" style={boxStyle}>
          <div id="header-content" className="container" style={{color: "white", position: "absolute", top: "50%", transform: "translateY(-50%)"}}>
            <h1 className="fw-bold" style={{fontFamily: "Poppins"}}><strong>{heading}</strong></h1>
            <h5>{paragraph}</h5>
            <a href={path}>
              <button><strong>{buttonText}</strong></button>
            </a>
          </div>
        </div>
        </>
    );
  }

HeaderImage.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

  export default HeaderImage;
