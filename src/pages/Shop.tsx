import { FormEvent, useState } from 'react';
import Search from '../components/Search';
import ProductsList from '../components/ProductsList';
import TestError from '../components/TestError';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/searchContext';

const Shop = () => {
  const [s, setSearch] = useState(localStorage.getItem('searchInput') || '');
  const navigate = useNavigate();

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      s: { value: string };
    };

    const s = target.s.value.trim();

    localStorage.setItem('searchInput', s);
    setSearch(s);
    navigate('/');
  };
  return (
    <>
      <SearchContext.Provider value={s}>
        <Search onSubmitHandler={onSubmitHandler} />
        <TestError />
        <ProductsList />
      </SearchContext.Provider>
    </>
  );
};

export default Shop;
