import styled from "styled-components";
import JaImage from '../../assets/Ja.jpg'
import { FaArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { ScrollContext } from "../../utility/SmoothScroll";


const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  img {
    width: 220px;
    border-radius: 50%;


  }
  p {
    text-align: center;
  }
  button {
    margin: 0 auto;
    background: linear-gradient(
        rgba(12, 27, 58, 0.7),
        #3f9fd2
        );
  }
  button:focus {
    outline: none;
  }
  button:hover {
    box-shadow: 0px 2px 10px white;
  }
  @media (max-height: 600px) {
    img {
    width: 180px;
  }}
  @media (max-height: 550px) {
    img {
    width: 160px;
  }
  }
  @media (max-height: 500px) {
    img {
    width: 140px;

  }
  }
  @media (max-height: 450px) {
    img {
    width: 120px;

  }
  }

`

const Styledh1 = styled.h1`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  @media (max-height: 600px) {
      padding-top: 0.9rem;
      margin-bottom: 0.8rem;
      font-size: 2rem;
    }
  @media (max-height: 550px) {
      padding-top: 0.7rem;
      margin-bottom: 0.7rem;
      font-size: 1.9rem;
    }
  @media (max-height: 500px) {
      padding-top: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
    }
    @media (max-height: 450px) {
      padding-top: 0.3rem;
      margin-bottom: 0.3rem;
      font-size: 1.6rem;
    }

`;

const Styledh2 = styled.h2`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 1rem;
  @media (max-height: 600px) {
    padding-top: 0.9rem;
    margin-bottom: 0.8rem;
  }
  @media (max-height: 550px) {
    padding-top: 0.7rem;
    margin-bottom: 0.7rem;
  }
  @media (max-height: 500px) {
    padding-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  @media (max-height: 450px) {
    padding-top: 0.3rem;
    margin-bottom: 0.3rem;
  }

`;

const Styledh4 = styled.h4`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 0.5rem;
  @media (max-height: 550px) {
    padding-top: 0.5rem;
    }
`;

const Quoter = styled.blockquote`
    width: 80%;
    @media (min-width: 568px) {
    width: 400px;
  }
    
`


const Introduction = () => {

    const { scrollToNextSection } = useContext(ScrollContext);

    const handleScrollDown = () => {
      scrollToNextSection();
    };

 
  

    return (<StyledDiv>

         <Styledh1>Michał Kikowski</Styledh1>
         <img src={JaImage} alt="Michał Kikowski"/>
         <Styledh2>Fullstack Developer</Styledh2>
         <Quoter>
         <p> Dedicated and proactive developer, consistently improving skills through daily coding and hands-on experience, with a focus on problem-solving and efficient solutions </p>
       

     
      </Quoter>
      <Styledh4>Explore portfolio</Styledh4>
      <button onClick={handleScrollDown}> <FaArrowDown /> </button>

            </StyledDiv>);
  };
  
  export default Introduction;