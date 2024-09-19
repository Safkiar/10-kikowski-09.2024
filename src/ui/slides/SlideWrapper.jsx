import styled from 'styled-components';

export const SlideContainer = styled.div`
  width: 100%;
  list-style: none;
  display: ${({ $flexOn }) => ($flexOn ? 'flex' : 'block')}; 
  justify-content: ${({ $flexOn }) => ($flexOn ? 'center' : 'initial')};
  position: relative;


  a {
    display: block; 
    width: 72%;
    @media (max-width: 568px) {
      width: 82%;
    }
    @media (max-height: 600px) {
    width: 60%;
  }
    @media (max-height: 500px) {
    width: 50%;
  }

    @media (max-height: 400px) {
    width: 40%;
  }
    
  } 


`;


export const SlideImage = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: ${({ $flexOn }) => ($flexOn ? '180px' : '300px')};


  @media (min-width: 568px) {
    height: ${({ $flexOn }) => ($flexOn ? '250px' : '300px')}; 
  }

  @media (min-width: 768px) {
    height: ${({ $flexOn }) => ($flexOn ? '250px' : '400px')};
  }

  @media (max-height: 650px) {
    height: ${({ $flexOn }) => ($flexOn ? '160px' : '250px')};
  }

  @media (max-height: 600px) {
    height: ${({ $flexOn }) => ($flexOn ? '150px' : '230px')};
  }
  @media (max-height: 550px) {
    height: ${({ $flexOn }) => ($flexOn ? '130px' : '210px')};
  }
  
  @media (max-height: 500px) {
    height: ${({ $flexOn }) => ($flexOn ? '110px' : '190px')};
  }
  @media (max-height: 450px) {
    height: ${({ $flexOn }) => ($flexOn ? '90px' : '170px')};
  }
  @media (max-height: 400px) {
    height: ${({ $flexOn }) => ($flexOn ? '80px' : '150px')};
  }



  &:hover {
    background-color: ${({ $flexOn }) => $flexOn ? 'rgba(0, 0, 0, 0.152)' : 'initial'};
    background-blend-mode: ${({ $flexOn }) => $flexOn ? 'multiply' : 'initial'};
  }
`;