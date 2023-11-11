import { ChangeEvent, FormEvent, useState } from 'react';
import Search from '../components/Search/Search';
import ProductsList from '../components/ProductsList/ProductsList';
import TestError from '../components/TestError';
import { useNavigate, useParams } from 'react-router-dom';
import { SearchContext } from '../context/searchContext';
import { changePerPageHandler, submitHandler } from '../utils/handlers';
import Footer from '../components/Footer/Footer';

const Shop = () => {
  const { page } = useParams();
  const [s, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const [perPage, setPerPage] = useState(25);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    submitHandler(event, setSearch, navigate);
  };

  const onChangePageHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
    changePerPageHandler(event, setPerPage, navigate);
  };
  return (
    <>
      <SearchContext.Provider
        value={{
          s,
          page: page ? Number(page) : 1,
          perPage,
          total,
          totalPages,
          setTotal,
          setTotalPages,
          onSubmitHandler,
          onChangePageHandler,
        }}
      >
        <Search />
        <TestError />
        <ProductsList />
        <Footer />
      </SearchContext.Provider>
    </>
  );
};

export default Shop;
