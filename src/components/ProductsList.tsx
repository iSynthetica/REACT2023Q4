import { Component, ReactNode } from 'react';
import ProductItem from './ProductItem';
import ProductI from '../types/ProductI';

interface ProductsListProps {
  s: string;
}

interface ProductsListState {
  products: ProductI[];
}

class ProductsList extends Component<ProductsListProps, ProductsListState> {
  state = {
    products: [],
  };
  host = 'https://shop.synthetica.com.ua//wp-json/wc/v3';
  token =
    'Y2tfOTNmOTkyZTA5ZjE1MTM5NzFiZjIwYWUwZDkyZWEyNzdmNWVmYTMzMjpjc18wYWE0ZGUxMzNlYzYxOGM1NWU3MjZiM2MxNWY4ODdkOTNiOWU3YTQy';
  componentDidMount() {
    this.fetchAllProducts(this.props.s);
  }
  componentDidUpdate(prevProps: ProductsListProps): void {
    const { s } = this.props;
    if (s === prevProps.s) return;
    this.fetchAllProducts(s);
  }
  renderProducts() {
    return this.state.products.map((product: ProductI) => (
      <ProductItem key={product.id} {...product} />
    ));
  }
  fetchAllProducts(s = '') {
    this.setState({ products: [] });
    const sParam = s ? `&search=${s}` : '';
    const url = `${this.host}/products?per_page=25${sParam}`;
    const headers = new Headers();
    headers.append('Authorization', `Basic ${this.token}`);
    const options = {
      method: 'GET',
      headers,
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((products) =>
        this.setState({
          products,
        })
      );
  }
  render(): ReactNode {
    return (
      <>
        <section id="contentContainer">
          {!this.state.products.length ? (
            <p className="loadingContainer">Loading...</p>
          ) : (
            <>
              {this.props.s ? (
                <h3 id="resultTitle">
                  Search result for <strong>{this.props.s}</strong> found in
                  products titles and descriptions
                </h3>
              ) : (
                <h3 id="resultTitle">
                  Type into search field for filtering products by title or
                  description
                </h3>
              )}

              {this.renderProducts()}
            </>
          )}
        </section>
      </>
    );
  }
}

export default ProductsList;
