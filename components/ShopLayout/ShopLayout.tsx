import Search from '../Search/Search';
import Footer from '../Footer/Footer';
import AppProvider from '../../state/AppProvider';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ErrorBoundary>
        <AppProvider>
          <Search />
          {children}
          <Footer />
        </AppProvider>
      </ErrorBoundary>
    </>
  );
}
