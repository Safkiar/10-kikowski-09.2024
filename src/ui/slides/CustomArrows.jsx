import styled from 'styled-components';

export const CustomPrevArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.7rem;
  cursor: pointer;
  button {
    background: linear-gradient(
        rgba(13, 40, 94, 0.459),
        #2c78a142
        );
    border-radius: 20%;
    border: none;
    font-size:  ${({ $flexOn }) => ($flexOn ? '13px' : '18px')};
    cursor: pointer;
    text-shadow: 2px 2px 2px rgba(247, 247, 248, 0.226);
  }
  button:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: ${({ $flexOn }) => ($flexOn ? '15%' : '102%')};
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
  cursor: pointer;
  button {
    background-color: #ffffff28;
    background: linear-gradient(
        rgba(13, 40, 94, 0.459),
        #2c78a142
        );
    border-radius: 20%;
    border: none;
    font-size:  ${({ $flexOn }) => ($flexOn ? '13px' : '18px')};
    cursor: pointer;
    text-shadow: 2px 2px 2px rgba(247, 247, 248, 0.226);
  }
  button:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    position: absolute;
    top: ${({ $flexOn }) => ($flexOn ? '15%' : '102%')};
  }

  @media (max-height: 550px) {
  button {

    font-size:  ${({ $flexOn }) => ($flexOn ? '12px' : '15px')};
  }
}
`;