import { FormEvent, useState } from 'react';
import Search from '../components/Search/Search';
import ProductsList from '../components/ProductsList/ProductsList';
import TestError from '../components/TestError';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/searchContext';
import { onSearchSubmitHandler } from '../utils/handlers';
import Footer from '../components/Footer/Footer';

const Shop = () => {
  const [s, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const navigate = useNavigate();

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    onSearchSubmitHandler(event, setSearch, navigate);
  };
  return (
    <>
      <SearchContext.Provider value={{ s }}>
        <Search onSubmitHandler={onSubmitHandler} />
        <TestError />
        <ProductsList />
        <Footer />
      </SearchContext.Provider>
    </>
  );
};

export default Shop;
