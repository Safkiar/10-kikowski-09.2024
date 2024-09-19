import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
height: 100%;
display: flex;
flex-direction: column;
@media (min-height: 800px)  {
  gap: 10px;}
@media (min-height: 650px) and (max-width: 450px) {
  gap: 1px;}
@media (min-height: 670px) and (max-width: 450px) {
  gap: 4.9px;}
  @media (min-height: 750px) and (max-width: 450px) {
    gap: 8px;}



`;




const SliderWraper = ({ children}) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  );
};

SliderWraper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SliderWraper;