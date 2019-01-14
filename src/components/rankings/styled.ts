import styled from '../../styled/StyledComponents';
import Wrapper from '../../styled/Wrapper';

const Grade = styled.span`
  width: 1rem;
`;

const InnerWrapper = styled(Wrapper.BlockWrapper)`
  * {
    margin: 0;
    padding-left: 1rem;
  }
`;

const RankingItem = styled(Wrapper.FlexWrapper)`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  color: black;
  text-decoration: none;
`;

const RankingWrapper = styled(Wrapper.BlockWrapper)`
  max-width: 60rem;
  margin: 7rem auto;
`;

const Thumbnail = styled(Wrapper.BlockWrapper)`
  width: 6rem;
  height: 6rem;
  overflow: hidden;
  margin: 1rem 3rem;

  img {
    width: auto;
    height: 100%;
  }
`;

export default {
  Grade,
  InnerWrapper,
  RankingItem,
  RankingWrapper,
  Thumbnail,
};
