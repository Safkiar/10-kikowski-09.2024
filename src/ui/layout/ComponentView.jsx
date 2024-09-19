import styled from 'styled-components';
import PropTypes from 'prop-types';

const FullHeight = styled.div`
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: start;
`;

const ComponentView = ({ children }) => {
  return <FullHeight>{children}</FullHeight>;
};

ComponentView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComponentView;