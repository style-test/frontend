import React from 'react';

const Products = React.lazy(() => import('../components/products'));
const Rankings = React.lazy(() => import('../components/rankings'));

export default {
  Products,
  Rankings,
};
