import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { StyledHeaderTwo } from "../../ui/textStyle/FirstHeader";

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  
@media (min-height: 600px) and (max-width: 450px) {
  gap: 10px;}

  
`;



const OneLiner = styled.div`
  display: flex;
  align-items: center; 
  margin: 0 auto;
  margin-bottom: 6px;
  width: 80%;
  @media (max-height: 450px) {
      margin-bottom: 4px;
      width: 50%;
    }

`;

const StyledP = styled.p`
    font-size: 1.4rem;
    width: 50%;
    display: flex;
    justify-content: center;

    @media (max-width: 558px) {
      font-size: 1.2rem;
    }
    @media (max-width: 488px) {
      font-size: 1rem;
    }
    @media (max-width: 428px) {
      font-size: 0.8rem;
    }
    @media (max-height: 550px) {
      font-size: 1.2rem;
    }
    @media (max-height: 450px) {
      font-size: 1rem;
    }
    @media (max-height: 380px) {
      font-size: 0.8rem;
    }
  
`

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;


  .gradient-star {
    font-size: 1.8rem;
    filter: drop-shadow(0px 3px 10px #1e45c494);
    fill: url(#gradient); 
    @media (max-height: 550px) {
      font-size: 1.4rem;
    }

    @media (max-height: 450px) {
      font-size: 1.2rem;
    }
    @media (max-height: 380px) {
      font-size: 1rem;
    }
  }


  .black-star {
    font-size: 1.8rem;
    color: #363636; 
    fill: url(#gradient2); 
    filter: none; 
filter: drop-shadow(0px 3px 12px #000208);
@media (max-height: 550px) {
      font-size: 1.4rem;
    }
@media (max-height: 450px) {
      font-size: 1.2rem;
    }
    @media (max-height: 380px) {
      font-size: 1rem;
    }
  }

`;

const ShadowHr = styled.hr`
border: 1px solid #36363616;
  height: 1px;
  box-shadow: 0px 1px 8px rgba(252, 250, 250, 0.6); 
  margin: 20px 0; 
  @media (max-height: 550px) {
      margin: 12px 0;
    }
  @media (max-height: 450px) {
      margin: 10px auto;
      width: 50%;
    }
`;




const GradientSVG = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="rgba(24, 41, 80, 0.7)" />
        <stop offset="100%" stopColor="#59b3e4" />
      </linearGradient>
    </defs>
  </svg>
);

const GradientSVG2 = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="gradient2" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="rgba(8, 20, 44, 0.7)" />
        <stop offset="100%" stopColor="#3f7b9b83" />
      </linearGradient>
    </defs>
  </svg>
);


const Selfassesment = () => {
  return (
    <StyledDiv>
      <StyledHeaderTwo>Skills</StyledHeaderTwo>

      <GradientSVG />
      <GradientSVG2/>
      {/*  */}
      <OneLiner>
        <StyledP>React</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>
      {/*  */}
      <OneLiner>
        <StyledP>JavaScript</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>
      {/*  */}
      <OneLiner>
        <StyledP>TypeScript</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>
      {/*  */}
      <OneLiner>
        <StyledP>Angular</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>
{/*  */}
<OneLiner>
        <StyledP>CSS</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>
{/*  */}
<ShadowHr></ShadowHr>
{/*  */}
<OneLiner>
        <StyledP>NodeJS</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>
{/*  */}
<OneLiner>
        <StyledP>SQL</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>
      {/*  */}
<OneLiner>
        <StyledP>Moongose</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>
{/*  */}
<ShadowHr></ShadowHr>
{/*  */}
<OneLiner>
        <StyledP>Git</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>

{/*  */}
<OneLiner>
        <StyledP>Python</StyledP>
        <StarContainer>
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="gradient-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" />
          <FaStar className="black-star" /> 
          <FaStar className="black-star" />
        </StarContainer>
      </OneLiner>

    </StyledDiv>
  );
};

export default Selfassesment;