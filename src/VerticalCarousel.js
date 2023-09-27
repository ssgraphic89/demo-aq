import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Slide from "./Slide";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  margin: 0 auto;
  width: 20%;
  margin-top: 1rem;
  justify-content: space-between;
  z-index: 1000;
`;

const NavBtn = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 3px;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

const VerticalCarousel = ({
    slides = [], // Provide a default value for slides
    goToSlide,
    showNavigation,
    offsetRadius: initialOffsetRadius,
    animationConfig,
  }) => {
    const [carouselState, setCarouselState] = useState({
      index: 0,
      offsetRadius: initialOffsetRadius,
      newSlide: false,
    });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        moveSlide(-1);
      }
      if (event.keyCode === 40) {
        moveSlide(1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const moveSlide = (direction) => {
    setCarouselState((prevState) => ({
      index: modBySlidesLength(prevState.index + direction),
      newSlide: false,
      offsetRadius: prevState.offsetRadius, // Preserve offsetRadius
    }));
  };

  const clampOffsetRadius = (offsetRadius) => {
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  };

  const modBySlidesLength = (index) => {
    return mod(index, slides.length);
  };

  const getPresentableSlides = () => {
    let { offsetRadius } = carouselState;
    offsetRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      const slideIndex = modBySlidesLength(carouselState.index + i);
      const slide = slides[slideIndex];

      // Check if the slide is defined before pushing to the array
      if (slide) {
        presentableSlides.push(slide);
      }
    }

    return presentableSlides;
  };

  let navigationButtons = null;
  if (showNavigation) {
    navigationButtons = (
      <NavigationButtons>
        <NavBtn onClick={() => moveSlide(1)}>&#8593;</NavBtn>
        <NavBtn onClick={() => moveSlide(-1)}>&#8595;</NavBtn>
      </NavigationButtons>
    );
  }

  return (
    <React.Fragment>
      <Wrapper>
        {getPresentableSlides().map((slide, presentableIndex) => (
          <Slide
            key={slide.key}
            content={slide.content}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(carouselState.offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
      </Wrapper>
      {navigationButtons}
    </React.Fragment>
  );
};

VerticalCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      content: PropTypes.object,
    })
  ).isRequired,
  goToSlide: PropTypes.number,
  showNavigation: PropTypes.bool,
  offsetRadius: PropTypes.number,
  animationConfig: PropTypes.object,
};

VerticalCarousel.defaultProps = {
  offsetRadius: 2,
  animationConfig: { tension: 120, friction: 14 },
};

export default VerticalCarousel;
