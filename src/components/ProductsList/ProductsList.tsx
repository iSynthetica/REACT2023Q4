import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import ProductI from '../../types/ProductI';
import fetchProducts from '../../utils/fetchProducts';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import './ProductsList.css';
import ResultTitle from '../ResultTitle/ResultTitle';
import { RootState } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { setTotal, setTotalPages, setProducts } from '../../state/shopSlice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { s, perPage, page, products } = useSelector(
    (state: RootState) => state.shop
  );
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getConteinerClassName = () => (id ? 'prodactDetailsActive' : '');

  const fetchAllProducts = () => {
    setIsLoading(true);
    setIsError(false);
    dispatch(setProducts([]));
    dispatch(setTotal(0));
    dispatch(setTotalPages(0));

    try {
      fetchProducts(Number(page), perPage, s).then(
        ({ products, error, total, totalPages }) => {
          if (error) throw new Error();

          dispatch(setTotal(total));
          dispatch(setTotalPages(totalPages));
          setIsLoading(false);
          dispatch(setProducts(products));
        }
      );
    } catch (err) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, [s, page, perPage]);

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
