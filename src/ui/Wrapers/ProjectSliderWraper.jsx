import styled from "styled-components";
import PropTypes from 'prop-types';
import {StyledHeaderTwo} from '../textStyle/FirstHeader'

const StyledDiv = styled.div`
height: 100%;
display: flex;
flex-direction: column;


@media (min-height: 600px) and (max-width: 450px) {
gap: 15px;}
`;




const ProjectSliderWraper = ({ children}) => {
  return (
    <StyledDiv>
        <StyledHeaderTwo>Certificates</StyledHeaderTwo>
      {children}
    </StyledDiv>
  );
};

ProjectSliderWraper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProjectSliderWraper;