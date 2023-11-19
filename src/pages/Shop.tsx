import Search from '../components/Search/Search';
import ProductsList from '../components/ProductsList/ProductsList';
import TestError from '../components/TestError/TestError';
import Footer from '../components/Footer/Footer';
import AppProvider from '../context/AppProvider';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setPage } from '../state/shopSlice';

const Shop = () => {
  const dispatch = useDispatch();
  const { page } = useParams();
  dispatch(setPage(Number(page) || 1));

  console.log('Shop rendering');

  return (
    <>
      <AppProvider>
        <Search />
        <TestError />
        <ProductsList />
        <Footer />
      </AppProvider>
    </>
  );
};

export default Shop;
