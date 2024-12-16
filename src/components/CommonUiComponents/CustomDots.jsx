import styled from 'styled-components';

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ $flexOn }) => ($flexOn ? '0' : 'px')};
`;

export const Dot = styled.button`
  background-color: ${(props) => (props.$active ? '#333' : '#ccc')};
  border: none;
  border-radius: 50%;
  display: inline-block;
  margin: 1rem 7px;
  padding: 5px;
  cursor: pointer;
  background: ${(props) =>
    props.$active
      ? `linear-gradient(
        rgba(15, 28, 56, 0.7),
        #4aace0
        )`
      : `linear-gradient(
        rgba(12, 27, 58, 0.7),
        #2f7da783
        )`};
  border: 1px solid #10283683;
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => (props.active ? '#444' : '#bbb')};
  }

  @media (max-height: 600px) {
    padding: 7px;
    margin: 0.9rem 7px;
  }
  @media (max-height: 400px) {
    padding: 6px;
    margin: 0.8rem 7px;
  }
`;
