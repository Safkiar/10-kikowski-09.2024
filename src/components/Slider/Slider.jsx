import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { frontendCourses, backendCourses, generalCourses } from "../../path/images";
import { useState, useEffect, useRef } from "react";
import { CustomPrevArrow, CustomNextArrow } from '../../ui/slides/CustomArrows';
import { Dot, DotContainer } from "../../ui/slides/CustomDots";
import { SlideContainer, SlideImage } from "../../ui/slides/SlideWrapper";
import { ButtonWrapper, StyledButton } from "../../ui/slides/ButtonWrapper";
import ProjectSliderWraper from "../../ui/Wrapers/ProjectSliderWraper";

export default function Slider() {
  const [slideImages, setSlideImages] = useState(frontendCourses); 
  const [loading, setLoading] = useState(true); 
  const [currentSlide, setCurrentSlide] = useState(0); 
  const slideRef = useRef(); 
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    setLoading(true);

    const loadImages = () => {
      const promises = slideImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      Promise.all(promises).then(() => setLoading(false));
    };

    loadImages();
  }, [slideImages]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  const handleCategoryChange = (category) => {
    setCurrentSlide(0);
    setActiveCategory(category); 
    if (category === "frontend") {
      setSlideImages(frontendCourses);
    } else if (category === "backend") {
      setSlideImages(backendCourses);
    } else {
      setSlideImages(generalCourses);
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index); 
    slideRef.current.goTo(index); 
  };



  return (
    <ProjectSliderWraper >
   <ButtonWrapper>
        <StyledButton
          onClick={() => handleCategoryChange('frontend')}
          $active={activeCategory === 'frontend'} 
        >
          Frontend
        </StyledButton>
        <StyledButton
          onClick={() => handleCategoryChange('backend')}
          $active={activeCategory === 'backend'} 
        >
          Backend
        </StyledButton>
        <StyledButton
          onClick={() => handleCategoryChange('general')}
          $active={activeCategory === 'general'} 
        >
          General
        </StyledButton>
      </ButtonWrapper>

      {loading ? (
        <div >Loading...</div>
      ) : (
        <>
          <Slide
            easing="ease"
            duration={3000}
            prevArrow={
              <CustomPrevArrow onClick={handlePrevSlide}>
                <button>&lt;</button>
              </CustomPrevArrow>
            }
            nextArrow={
              <CustomNextArrow onClick={handleNextSlide}>
                <button>&gt;</button>
              </CustomNextArrow>
            }
            ref={slideRef} 
            onChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)} 
          >
            {slideImages.map((slide, index) => (
           <SlideContainer key={index}>
           <SlideImage style={{ backgroundImage: `url(${slide})` }} />
         </SlideContainer>
            ))}
          </Slide>

          <DotContainer>
        {slideImages.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
        </>
      )}
    </ProjectSliderWraper>
  );
}