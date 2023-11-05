import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../utils/fetchProducts';
import ProductI from '../types/ProductI';
import { NavLink } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null as ProductI | null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setProduct(null);
    fetchProduct(Number(id)).then((resp) => {
      if (resp.error) {
        throw new Error();
      }
      setProduct(resp.product);
      setIsLoading(false);
      console.log(resp);
    });
  }, [id]);
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
