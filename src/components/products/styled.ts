import styled from '../../styled/StyledComponents';
import Wrapper from '../../styled/Wrapper';

const ProductItem = styled(Wrapper.BlockWrapper)<{ img: string }>`
  width: 19rem;
  height: 19rem;
  margin: 1px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

const InnerWrapper = styled(Wrapper.BlockWrapper)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  text-decoration: none;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);

  * {
    margin: 0;
    padding-left: 1rem;
  }
`;

const ProductWrapper = styled(Wrapper.FlexWrapper)`
  max-width: 60rem;
  margin: 7rem auto;
  flex-wrap: wrap;
  justify-content: center;
`;

export default {
  InnerWrapper,
  ProductItem,
  ProductWrapper,
};
