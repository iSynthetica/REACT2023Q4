import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import AppProvider from '../../state/AppProvider';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppProvider>
        <Search />
        {children}
        <Footer />
      </AppProvider>
    </>
  );
}
