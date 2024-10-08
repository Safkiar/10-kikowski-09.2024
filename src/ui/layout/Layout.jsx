import styled from 'styled-components';
import PropTypes from 'prop-types';

const BodyLayout = styled.div`
  color: #dce6ec;
  background: linear-gradient(to right, #03051a, #0c1b3a);

  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  will-change: transform;
  width: auto;
`;

const Skeleton = styled.div`
  /* max-width: 86vw; */
  margin: 0 auto;
  height: 100%;
  min-width: 330px;
  /* max-width: 90vw; */

  @media (max-width: 768px) {
    width: 95vw;
  }
`;

const Layout = ({ children }) => {
  return (
    <BodyLayout>
      <Skeleton>{children}</Skeleton>
    </BodyLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;