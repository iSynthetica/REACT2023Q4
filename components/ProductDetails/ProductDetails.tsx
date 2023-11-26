import styles from './ProductDetails.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState, wrapper } from '../../state/store';
import { fetchProduct, useFetchProductQuery } from '../../api/products';
import Loader from '../Loader/Loader';

const ProductDetails = ({ id }: { id: number }) => {
  const { page } = useSelector((state: RootState) => state.shop);
  const { data: product, isFetching } = useFetchProductQuery(Number(id));

  const getDetailsLink = () => {
    if (!page || page === 1) {
      return `/`;
    }

    return `/page/${page}`;
  };
  return (
    <>
      <div id="overlay">
        <Link href={getDetailsLink()}></Link>
      </div>
      <div id="productDetails" className={styles.productDetails}>
        {isFetching ? (
          <Loader />
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

            <Link
              id="closeButton"
              className={styles.closeButton}
              href={getDetailsLink()}
            >
              &#10060;
            </Link>
          </>
        ) : (
          <h4>Not found</h4>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const id = context.params!.id;
    if (id) {
      store.dispatch(fetchProduct.initiate(Number(id)));
    }

    return {
      props: {},
    };
  }
);

export default ProductDetails;
