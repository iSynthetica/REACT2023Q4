import { Component, FormEvent, ReactNode } from 'react';
import Search from './Search';
import ProductsList from './ProductsList';
import TestError from './TestError';

class Shop extends Component {
  state = {
    s: localStorage.getItem('searchInput') || '',
  };
  onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      s: { value: string };
    };

    const s = target.s.value.trim();

    localStorage.setItem('searchInput', s);
    this.setState({ s });
  };
  render(): ReactNode {
    return (
      <>
        <Search s={this.state.s} onSubmitHandler={this.onSubmitHandler} />
        <TestError />
        <ProductsList s={this.state.s} />
      </>
    );
  }
}

export default Shop;
