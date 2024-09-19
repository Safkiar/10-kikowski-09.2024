import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
height: 100%;
display: flex;
flex-direction: column;

@media (min-height: 600px) and (max-width: 450px) {
  gap: 40px;
}
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