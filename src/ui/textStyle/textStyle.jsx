import styled from 'styled-components';

export const ProjectHeading = styled.h2`
text-align: center;
margin-top:2rem;
margin-bottom: 5px;


@media (max-width: 568px) {
      margin-bottom: 0;
    }
@media (max-height: 600px) {
  margin-top: 1.4rem;
}
@media (max-height: 560px) {
  margin-top: 1.1rem;
}
@media (max-height: 500px) {
  margin-top: 0.9rem;
}
@media (max-height: 450px) {
  margin-top: 0.65rem;
}
@media (max-height: 400px) {
  margin-top: 0.5rem;
}
`;

export const ProjectDescription = styled.p`
text-align: center;
@media (max-width: 568px) {
font-size: 0.85rem;
margin: 0 3px;
    }

    @media (max-height: 600px) {
        font-size: 0.9rem;
}
    @media (max-height: 500px) {
        font-size: 0.77rem;
}

@media (min-height: 600px) and (max-width: 450px) {
  font-size:1rem;}
`;

export const ProjectDate = styled.p`
display: flex;
width: 80%;
margin: 0 auto;
margin-bottom: 10px;


svg {
    font-size: 1.4rem;
    margin-right: 10px;
}
@media (max-width: 568px) {
font-size: 0.85rem;
svg {
    font-size: 1.2rem;
}
    }
    @media (max-height: 450px) {
font-size: 0.9rem;
svg {
    font-size: 1.25rem;
}
}
@media (max-height: 400px) {
font-size: 0.85rem;
svg {
    font-size: 1.2rem;
}
}
`;

export const WraperOfStyles = styled.ul`
text-align: center;
margin-bottom: 12px;
list-style-type: none;
@media (max-height: 450px) {
  margin-bottom: 8px;
}
@media (max-height: 400px) {
  margin-bottom: 6px;
}
`;

export const FirstLi = styled.li`
text-align: center;
background: linear-gradient( rgba(48, 74, 126, 0.7), #3f9fd2);
margin-bottom: 4px;
text-shadow: 2px 2px 2px black;
@media (max-height: 500px) {
  font-size: 0.9rem;
}
@media (max-height: 400px) {
  font-size: 0.8rem;
}
`;
export const SecondLi = styled.li`
text-align: center;
background: linear-gradient( rgba(36, 55, 94, 0.7), #2e8bbdd2);
margin-bottom: 4px;
text-shadow: 2px 2px 2px black;
@media (max-height: 500px) {
  font-size: 0.9rem;
}
@media (max-height: 400px) {
  font-size: 0.8rem;
}
`;
export const ThirdLi = styled.li`
text-align: center;
background: linear-gradient( rgba(84, 134, 199, 0.7), #3d33c0d1);
text-shadow: 2px 2px 2px black;
@media (max-height: 500px) {
  font-size: 0.9rem;
}
@media (max-height: 400px) {
  font-size: 0.8rem;
}
`;


// background: linear-gradient( rgba(48, 74, 126, 0.7), #3f9fd2);