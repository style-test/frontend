import styled from '../../styled/StyledComponents';
import Wrapper from '../../styled/Wrapper';

const ProductItem = styled(Wrapper.FlexWrapper)`
  width: 19rem;
  height: 19rem;
  padding: 0.25rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const ProductWrapper = styled(Wrapper.FlexWrapper)`
  max-width: 60rem;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

export default {
  ProductItem,
  ProductWrapper,
};
