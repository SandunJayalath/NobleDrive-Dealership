import { useState } from "react";
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "75px",
    color: "rgb(218, 218, 218)",
    zIndex: 1,
    cursor: "pointer",
    webkitTextStroke: "4px rgb(0, 0, 0)",
    transition: "0.3s",
  };
  
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "75px",
    color: "rgb(218, 218, 218)",
    zIndex: 1,
    cursor: "pointer",
    webkitTextStroke: "4px rgb(0, 0, 0)",
    transition: "0.3s",
  };
  
  const sliderStyles = {
    position: "relative",
    height: "100%",
  };
  
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "40px"
  };
  
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };
  
  const SingleProductSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
      ...slideStyles,
      backgroundImage: `url(${slides[currentIndex].url})`,
    };

    return (
        <>
        <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} id="leftArrowStyles" aria-label="View Previous Image" style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} id="rightArrowStyles" aria-label="View Next Image" style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div id="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div id="dotStyle" key={slideIndex} onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
        </>
    );

}

export default SingleProductSlider;
