import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import ProductI from '../../types/ProductI';
import fetchProducts from '../../utils/fetchProducts';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import './ProductsList.css';
import ResultTitle from '../ResultTitle/ResultTitle';
import { useAppContext } from '../../context/AppProvider';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

const ProductsList = () => {
  const { perPage, page, products, setProducts, setTotal, setTotalPages } =
    useAppContext();
  const s = useSelector((state: RootState) => state.shop.s);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getConteinerClassName = () => (id ? 'prodactDetailsActive' : '');

  const fetchAllProducts = () => {
    setIsLoading(true);
    setIsError(false);
    setProducts([]);
    setTotal(0);
    setTotalPages(0);

    try {
      fetchProducts(Number(page), perPage, s).then(
        ({ products, error, total, totalPages }) => {
          if (error) throw new Error();

          setTotal(total);
          setTotalPages(totalPages);
          setIsLoading(false);
          setProducts(products);
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
