import styled from '../../styled/StyledComponents';
import Wrapper from '../../styled/Wrapper';

const HeaderWrapper = styled('header')`
  width: 100vw;
  padding: 1rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
`;

const InnerWrapper = styled(Wrapper.FlexWrapper)`
  width: 10rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  a:link,
  a:visited {
    color: black;
  }
`;

export default {
  HeaderWrapper,
  InnerWrapper,
};
