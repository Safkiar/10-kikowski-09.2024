import styled from "styled-components";
import { moveInLeft, moveInRight, moveInUp } from "./animations";

export const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;

  img {
  width: 220px;
  border-radius: 50%;

  animation: ${moveInLeft} 1.2s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 1px 50px rgba(171, 198, 252, 0.300);
}



  p {
    text-align: center;
  }


  button {
    margin: 0 auto;
    animation: ${moveInUp} 1.2s cubic-bezier(0.25, 1, 0.5, 1);
    background: linear-gradient(
        rgba(12, 27, 58, 0.7),
        #3f9fd2
        );
  }
  button:focus {
    outline: none;
    box-shadow: rgba(12, 27, 58, 0.7);
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

export const Styledh1 = styled.h1`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  animation: ${moveInLeft} 1.2s cubic-bezier(0.25, 1, 0.5, 1);
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

export const Styledh2 = styled.h2`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 1rem;
  animation: ${moveInRight} 1.2s cubic-bezier(0.25, 1, 0.5, 1);
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

export const Styledh4 = styled.h4`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 0.5rem;
  animation: ${moveInUp} 1.2s cubic-bezier(0.25, 1, 0.5, 1);
  @media (max-height: 550px) {
    padding-top: 0.5rem;
    }
`;

export const Quoter = styled.blockquote`
    width: 80%;
    animation: ${moveInRight} 1.2s cubic-bezier(0.25, 1, 0.5, 1);
    @media (min-width: 568px) {
    width: 400px;
  }
    
`
