import { FormEvent, useState } from 'react';
import Search from '../components/Search';
import ProductsList from '../components/ProductsList';
import TestError from '../components/TestError';
import { useNavigate } from 'react-router-dom';

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
      <Search s={s} onSubmitHandler={onSubmitHandler} />
      <TestError />
      <ProductsList s={s} />
    </>
  );
};

export default Shop;
