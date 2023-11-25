import styles from './ProductsList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { useFetchProductsQuery } from '../../api/products';
import { useDispatch } from 'react-redux';
import { setProducts, setTotal, setTotalPages } from '../../state/shopSlice';
import { useEffect } from 'react';
import ProductI from '../../types/ProductI';
import ProductItem from '../ProductItem/ProductItem';
import Loader from '../Loader/Loader';

const ProductsList = () => {
  const { s, perPage, page, products } = useSelector(
    (state: RootState) => state.shop
  );
  const dispatch = useDispatch();

  const { data, isFetching } = useFetchProductsQuery({
    s,
    per_page: perPage,
    page,
  });

  useEffect(() => {
    dispatch(setProducts([]));
    if (data) {
      dispatch(setTotal(data.total));
      dispatch(setTotalPages(data.totalPages));
      dispatch(setProducts(data.products));
    }
  }, [data, dispatch]);
  return (
    <>
      <section className={styles.contentContainer}>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <div id="productsList">
              {products.map((product: ProductI) => (
                <ProductItem key={product.id} {...product} />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ProductsList;
