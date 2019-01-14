import React from 'react';
import { Link } from 'react-router-dom';

import Styled from './styled';

const Header = React.memo(() => (
  <Styled.HeaderWrapper>
    <Styled.InnerWrapper>
      <Link to="/products">상품 탭</Link>
      <Link to="/rankings">랭킹 탭</Link>
    </Styled.InnerWrapper>
  </Styled.HeaderWrapper>
));

export default Header;
