import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import ProductI from '../../types/ProductI';
import fetchProducts from '../../utils/fetchProducts';
import Pagination from '../Pagination';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useSearchContext } from '../../context/searchContext';
import './ProductsList.css';

const ProductsList = () => {
  const { s, perPage } = useSearchContext();
  let { page } = useParams();
  const { id } = useParams();
  const [products, setProducts] = useState([] as ProductI[]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getConteinerClassName = () => {
    return id ? 'prodactDetailsActive' : '';
  };

  const renderResultTitle = () => {
    return !products.length
      ? 'Nothing found, try another request.'
      : s
      ? `Search result for ${s} found ${total} products in
                  products titles and descriptions. Total pages ${totalPages}.`
      : isError
      ? `Something went wrong try again.`
      : `Total products ${total}. Total pages ${totalPages}. Type into search field for filtering products by title or
                  description.`;
  };

  const fetchAllProducts = () => {
    setIsLoading(true);
    setIsError(false);
    setProducts([]);

    try {
      page = page || '1';

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
            <h3 id="resultTitle">{renderResultTitle()}</h3>

            <div id="productsList">
              {products.map((product: ProductI) => (
                <ProductItem key={product.id} {...product} />
              ))}
            </div>

            <div id="overlay">
              <NavLink to=".." />
            </div>

            <Outlet />

            <div id="pagination">
              <Pagination
                totalPages={totalPages}
                currentPage={Number(page) || 1}
              />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ProductsList;
