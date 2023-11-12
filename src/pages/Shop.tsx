import Search from '../components/Search/Search';
import ProductsList from '../components/ProductsList/ProductsList';
import TestError from '../components/TestError/TestError';
import Footer from '../components/Footer/Footer';
import AppProvider from '../context/AppProvider';

const Shop = () => {
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
