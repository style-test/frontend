import React from 'react';
import { connect } from 'react-redux';
import { fetchRankings } from '../../store/actions';

import Styled from './styled';

interface IRankingItem {
  id: number;
  description: string;
  name_en: string;
  name_ko: string;
  image_url: string;
  url: string;
}

interface IRankingsProps {
  fetch: () => void;
  rankings: IRankingItem[];
}

const RankingItem = React.memo(({ item }: { item: IRankingItem }) => (
  <a rel="noopener noreferrer" target="_blank" href={item.url}>
    <Styled.RankingItem>
      <Styled.Grade>{item.id}</Styled.Grade>
      <Styled.Thumbnail>
        <img src={item.image_url} alt={item.name_en} />
      </Styled.Thumbnail>
      <Styled.InnerWrapper>
        <h2>
          {item.name_ko} | {item.name_en}
        </h2>
        <p>{item.description}</p>
      </Styled.InnerWrapper>
    </Styled.RankingItem>
  </a>
));

class Rankings extends React.Component<IRankingsProps, any> {
  public componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  public shouldComponentUpdate(nextProps: any) {
    const { rankings } = this.props;
    return nextProps.rankings !== rankings;
  }

  public render() {
    const { rankings } = this.props;
    return (
      <Styled.RankingWrapper>
        {rankings.map(item => (
          <RankingItem key={item.id} item={item} />
        ))}
      </Styled.RankingWrapper>
    );
  }
}

const mapStateToProps = (state: any) => ({
  rankings: state.rankings,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetch: () => dispatch(fetchRankings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rankings);
