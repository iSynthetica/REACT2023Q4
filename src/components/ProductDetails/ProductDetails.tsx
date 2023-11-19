import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './ProductDetails.css';
import { useFetchProductQuery } from '../../api/products';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useFetchProductQuery(Number(id));

  console.log(product);
  return (
    <>
      <div id="productDetails">
        {isLoading ? (
          'Loading...'
        ) : product ? (
          <>
            <h2>{product?.name}</h2>
            <p className="productMeta">
              SKU: <strong>{product.sku || product.slug}</strong>
            </p>
            {product.categories && product.categories.length ? (
              <p className="productMeta">
                Categories: <strong>{product.categories[0].name}</strong>
              </p>
            ) : (
              ''
            )}

            <div
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: product.price_html,
              }}
            />

            <NavLink id="closeButton" to="..">
              &#10060;
            </NavLink>
          </>
        ) : (
          <h4>Not found</h4>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
