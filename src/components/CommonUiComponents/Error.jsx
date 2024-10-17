import styled from "styled-components";
import PropTypes from 'prop-types';

const ErrorContainer = styled.div`
  max-width: 95vw;
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;
  background-color: #ff1744;
  border-radius: 7px;
  border: 1px solid #fe071c;
  color: #000000;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const ErrorMessage = (props) => {
    return (
      <ErrorContainer>
        ⚠️ Error: {props.error}
      </ErrorContainer>
    );
  };

  ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired,
  };

export default ErrorMessage;