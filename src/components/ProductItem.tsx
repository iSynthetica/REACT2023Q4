import { Component, ReactNode } from 'react';
import ProductI from '../types/ProductI';

class ProductItem extends Component<ProductI> {
  render(): ReactNode {
    return (
      <article>
        <div className="imgContainer">
          <img src={this.props.images[0].src} alt={this.props.name} />
        </div>
        <div className="descriptionContainer">
          <h3>{this.props.name}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.description,
            }}
          />
        </div>
      </article>
    );
  }
}

export default ProductItem;
