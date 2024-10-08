import styled from 'styled-components';
import PropTypes from 'prop-types';

const FullHeight = styled.div`
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start;
  @media (min-width: 924px) and (min-height: 768px) {
    width: 900px;
    margin: 0 auto;
    ;
  }
`;

const ComponentView = ({ children }) => {
  return <FullHeight>{children}</FullHeight>;
};

ComponentView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComponentView;