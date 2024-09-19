import styled from "styled-components";
import PropTypes from 'prop-types';
import { StyledHeaderTwo } from "../textStyle/FirstHeader";

const StyledDiv = styled.div`
height: 100%;
display: flex;
flex-direction:column;

@media (min-height: 600px) and (max-width: 450px) {
  gap: 3rem;
}
`;



const Styledh3 = styled.h4`
margin-top: 1rem;
  text-align: center;
  @media (max-height: 550px) {
      margin-top: 0.6rem;
    }
  @media (max-height: 450px) {
      margin-top: 0.5rem;
    }
  
@media (min-height: 600px) and (max-width: 450px) {
  font-size: 1.4rem;}
`

const ChartWrapperComponent = ({ children,projectNumber}) => {
  return (
    <StyledDiv>
        <StyledHeaderTwo>Technologies in my projects</StyledHeaderTwo>
      {children}
      <Styledh3>Projects: {projectNumber}</Styledh3>
    </StyledDiv>
  );
};

ChartWrapperComponent.propTypes = {
    children: PropTypes.node.isRequired,
    projectNumber: PropTypes.number.isRequired,
};

export default ChartWrapperComponent;