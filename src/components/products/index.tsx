import React from 'react';

import Wrapper from '../../styled/Wrapper';
import Styled from './styled';

const ProductItem = () => (
  <Styled.ProductItem>
    <img src="https://source.unsplash.com/random/600x600" alt="product" />
  </Styled.ProductItem>
);

class Products extends React.Component {
  public render() {
    return (
      <Styled.ProductWrapper>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </Styled.ProductWrapper>
    );
  }
}

export default Products;
