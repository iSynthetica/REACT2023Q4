import { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import ProductI from '../../types/ProductI';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import './ProductsList.css';
import ResultTitle from '../ResultTitle/ResultTitle';
import { RootState } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { setTotal, setTotalPages, setProducts } from '../../state/shopSlice';
import { useFetchProductsQuery } from '../../api/products';

const ProductsList = () => {
  const { s, perPage, page, products } = useSelector(
    (state: RootState) => state.shop
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const getConteinerClassName = () => (id ? 'prodactDetailsActive' : '');

  const { data, isLoading, isError } = useFetchProductsQuery({
    s,
    per_page: perPage,
    page,
  });

  useEffect(() => {
    if (data) {
      dispatch(setTotal(data.total));
      dispatch(setTotalPages(data.totalPages));
      dispatch(setProducts(data.products));
    }
  }, [data, dispatch]);

  return (
    <>
      <section id="contentContainer" className={getConteinerClassName()}>
        {isLoading ? (
          <p className="loadingContainer">Loading...</p>
        ) : (
          <>
            <ResultTitle products={products} isError={isError} />

            <div id="productsList">
              {products.map((product: ProductI) => (
                <ProductItem key={product.id} {...product} />
              ))}
            </div>

            <div id="overlay">
              <NavLink to={page ? `/page/${page}` : ''} />
            </div>

            <Outlet />
          </>
        )}
      </section>
    </>
  );
};

export default ProductsList;
