import { ChangeEvent, FormEvent, useState } from 'react';
import Search from '../components/Search/Search';
import ProductsList from '../components/ProductsList/ProductsList';
import TestError from '../components/TestError';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/searchContext';
import { changePerPageHandler, submitHandler } from '../utils/handlers';
import Footer from '../components/Footer/Footer';

const Shop = () => {
  const [s, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const [perPage, setPerPage] = useState(25);

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
        value={{ s, perPage, onSubmitHandler, onChangePageHandler }}
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
