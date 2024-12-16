import JaImage from '../../assets/Ja.jpg';
import { useEffect, useState } from 'react';
import Spinner from '../CommonUiComponents/Spinner';
import { Quoter, StyledDiv, Styledh1, Styledh2 } from './ui/styles';

const Introduction = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = JaImage;
    img.onload = () => {
      setIsImageLoading(false);
    };
  }, []);
  return (
    <StyledDiv>
      {isImageLoading ? (
        <Spinner />
      ) : (
        <>
          <Styledh1>Michał Kikowski</Styledh1>
          <img
            src={JaImage}
            alt="Michał Kikowski"
            style={{ display: isImageLoading ? 'none' : 'block' }}
          />
          <Styledh2>Web Developer</Styledh2>
          <Quoter>
            <p>
              Dedicated and proactive developer, consistently improving skills
              through daily coding and hands-on experience, with a focus on
              problem-solving and efficient solutions
            </p>
          </Quoter>
          {/* <Styledh4>Explore portfolio</Styledh4> */}
          {/* <button onClick={handleScrollDown}>
            <FaArrowDown />
          </button> */}
        </>
      )}
    </StyledDiv>
  );
};

export default Introduction;
