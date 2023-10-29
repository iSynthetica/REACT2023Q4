import { Component, ReactNode } from 'react';
import ProductItem from './ProductItem';
import ProductI from '../types/ProductI';

interface ProductsListProps {
  s: string;
}

interface ProductsListState {
  isLoading: boolean;
  products: ProductI[];
}

class ProductsList extends Component<ProductsListProps, ProductsListState> {
  state = {
    isLoading: true,
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
  renderResultTitle() {
    return !this.state.products.length
      ? 'Nothing found, try another request'
      : this.props.s
      ? `Search result for ${this.props.s} found in
                  products titles and descriptions`
      : `Type into search field for filtering products by title or
                  description`;
  }
  fetchAllProducts(s = '') {
    this.setState({ isLoading: true, products: [] });
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
          isLoading: false,
          products,
        })
      );
  }
  render(): ReactNode {
    return (
      <>
        <section id="contentContainer">
          {this.state.isLoading ? (
            <p className="loadingContainer">Loading...</p>
          ) : (
            <>
              <h3 id="resultTitle">{this.renderResultTitle()}</h3>

              {this.renderProducts()}
            </>
          )}
        </section>
      </>
    );
  }
}

export default ProductsList;
