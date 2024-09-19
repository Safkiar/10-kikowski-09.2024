import styled from 'styled-components';

export const StyledHeaderTwo = styled.h2`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 568px) {
    padding-top: 1rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 430px) {
    font-size: 1.4rem;
  }
  @media (max-width: 350px) {
    font-size: 1.2rem;
  }
  @media (max-height: 650px) {
    font-size: 1.4rem;
    padding-top: 1.2rem;
    margin-bottom: 1rem;

  }
  @media (max-height: 500px) {
    font-size: 1.3rem;
    padding-top: 1.1rem;
    margin-bottom: 0.8rem;
  }

  @media (max-height: 400px) {
    font-size: 1.2rem;
    padding-top: 1rem;
    margin-bottom: 0.5rem;
  }

  @media (min-height: 660px) and (max-width: 450px) {
  padding-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.7rem;
}
`
