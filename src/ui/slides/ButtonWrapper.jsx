import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  gap: 30px; 
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    margin: 10px;
  }

  @media (max-height: 450px) {
  gap: 8px;
}

`;


export const StyledButton = styled.button`
  background: ${(props) =>
    props.$active
      ? `linear-gradient(
        rgba(12, 27, 58, 0.7),
        #3f9fd2
        )`
      : `linear-gradient(
        rgba(12, 27, 58, 0.7),
        #3f9fd283
        )`};
  transform:  ${(props) => (props.$active ? `scale(0.94)` : 'scale(1)')};
  color: #dce6ec;
  padding: 6px 30px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow:  ${(props) => (props.$active ? 'inset 0 0 20px rgba(64, 195, 218, 0.685), 0 0 20px rgba(255, 255, 255, .2)' : 'inset 0 0 20px rgba(255, 255, 255, 0);')};
  outline: 1px solid;
  outline-color: #dce6ec63;
  outline-offset: 0px;
  text-shadow: ${(props) => (props.$active ? `3px 1px 4px #1f292e` : 'none')};
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  @media (max-height: 550px) {
    padding: 4px 30px;
    font-size: 14px;
  }
  @media (max-height: 450px) {
    padding: 3px 30px;
    font-size: 13px;
  }


  &:hover {
    background-color: #022f5f6d;

    cursor: ${(props) => (props.$active ? `default` : 'pointer')};
    transform: scale(0.94);
    box-shadow: inset 0 0 20px rgba(64, 195, 218, 0.685), 0 0 20px rgba(255, 255, 255, .2);
    text-shadow: 3px 1px 4px #1f292e; 
  }

  &:focus {
    outline: none;
  }

  &:active {
    /* background-color: #97c0ec; */
  }
`;

