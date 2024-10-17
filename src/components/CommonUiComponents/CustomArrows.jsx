import styled from 'styled-components';

export const CustomPrevArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.7rem;
  cursor: pointer;
  border-radius: 20%;
  box-shadow: 0 2px 5px #d6d4d453;
  button {
    background-color: #ffffff28;
    background: linear-gradient(
        rgba(13, 40, 94, 0.822),
        #2c78a1dc
        );
 
    border: none;
    font-size:  ${({ $flexOn }) => ($flexOn ? '13px' : '18px')};
    cursor: pointer;
    text-shadow: 2px 2px 2px rgba(247, 247, 248, 0.226);
  }
  button:focus {
    outline: none;
    border: 1px solid rgba(82, 100, 138, 0.459);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: ${({ $flexOn }) => ($flexOn ? '55%' : '102%')};
  }
  @media (max-height: 550px) {
  button {

    font-size:  ${({ $flexOn }) => ($flexOn ? '12px' : '15px')};
  }
}
`;

export const CustomNextArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.7rem;
  border-radius: 20%;
  box-shadow: 0 2px 5px #d6d4d453;
  cursor: pointer;
  button {
    background-color: #ffffff28;
    background: linear-gradient(
        rgba(13, 40, 94, 0.822),
        #2c78a1dc
        );
 
    border: none;
    font-size:  ${({ $flexOn }) => ($flexOn ? '13px' : '18px')};
    cursor: pointer;
    text-shadow: 2px 2px 2px rgba(247, 247, 248, 0.226);
  }
  button:focus {
    outline: none;
    border: 1px solid rgba(82, 100, 138, 0.459);
  }
  @media (max-width: 768px) {
    position: absolute;
    top: ${({ $flexOn }) => ($flexOn ? '55%' : '102%')};
  }

  @media (max-height: 550px) {
  button {

    font-size:  ${({ $flexOn }) => ($flexOn ? '12px' : '15px')};
  }
}
`;