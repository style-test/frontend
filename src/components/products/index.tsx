import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/actions';

import Wrapper from '../../styled/Wrapper';
import Styled from './styled';

interface IProductItem {
  id: number;
  image_url: string;
  mobile_url: object;
  price: number;
  shop_en: string;
  shop_ko: string;
  title: string;
  url: string;
}

interface IProductsProps {
  fetch: () => void;
  products: IProductItem[];
}

const ProductItem = ({ item }: { item: IProductItem }) => (
  <Styled.ProductItem>
    <h1>{item.shop_ko}</h1>
    <img src={item.image_url} alt="product" />
  </Styled.ProductItem>
);

class Products extends React.Component<IProductsProps, any> {
  public componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  public render() {
    const { products } = this.props;
    return (
      <Styled.ProductWrapper>
        {products.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </Styled.ProductWrapper>
    );
  }
}

const mapStateToProps = (state: any) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetch: () => dispatch(fetchProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
