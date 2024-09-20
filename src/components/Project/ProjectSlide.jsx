import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { projectImages } from "../../path/images";
import { useState, useRef, useEffect } from "react";
import { CustomPrevArrow, CustomNextArrow } from '../../ui/slides/CustomArrows';
import { SlideContainer, SlideImage } from "../../ui/slides/SlideWrapper";
import { Dot, DotContainer } from "../../ui/slides/CustomDots";
import { FirstLi, ProjectDate, ProjectDescription, ProjectHeading, SecondLi, ThirdLi, WraperOfStyles } from "../../ui/textStyle/textStyle";
import SliderWraper from "../../ui/Wrapers/SliderWraper";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import ErrorMessage from "../../ui/error";
import Spinner from "../../ui/Spinner";


export default function Slider() {
  const projectKeys = Object.keys(projectImages);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);  
  const slideRef = useRef();

  useEffect(() => {

    const fetchData = () => {
      try {
        setTimeout(() => {
          if (projectImages) {
            setIsLoading(false);
          } else {
            throw new Error("No project images found");
          }
        }, 1000); 
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectKeys.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === projectKeys.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    slideRef.current.goTo(index);
  };

  const currentProject = projectImages[projectKeys[currentSlide]];

  if (isLoading) {
    return <Spinner />;  
  }

  if (error) {
    return <ErrorMessage error={error} />;  
  }

  return (
    <SliderWraper>
      <Slide
        easing="ease"
        autoplay={false}
        prevArrow={
          <CustomPrevArrow onClick={handlePrevSlide} $flexOn={true}>
            <button>&lt;</button>
          </CustomPrevArrow>
        }
        nextArrow={
          <CustomNextArrow onClick={handleNextSlide} $flexOn={true}>
            <button>&gt;</button>
          </CustomNextArrow>
        }
        ref={slideRef}
        onChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
      >
        {projectKeys.map((key) => {
          const currentProject = projectImages[key];
          return (
            <div key={key}>
              <ProjectHeading>{currentProject.title}</ProjectHeading>
              <SlideContainer $flexOn={true}>
                <a href={currentProject.path}>
                  <SlideImage $flexOn={true} style={{ backgroundImage: `url(${currentProject.image})` }} />
                </a>
              </SlideContainer>
            </div>
          );
        })}
      </Slide>

      <DotContainer $flexOn={true}>
        {projectKeys.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>

      <ProjectDate><HiOutlineCalendarDays />{currentProject.dataCreated}</ProjectDate>
      <div>
        <WraperOfStyles>
          {currentProject.technologyUsed.frontEnd?.length > 0 && (
            <FirstLi> {currentProject.technologyUsed.frontEnd.join(', ')}</FirstLi>
          )}
          {currentProject.technologyUsed.backend?.length > 0 && (
            <SecondLi> {currentProject.technologyUsed.backend.join(' ')}</SecondLi>
          )}
          {currentProject.technologyUsed.styles?.length > 0 && (
            <ThirdLi>{currentProject.technologyUsed.styles.join(' ')}</ThirdLi>
          )}
        </WraperOfStyles>
      </div>
      <ProjectDescription>{currentProject.description}</ProjectDescription>
    </SliderWraper>
  );
}