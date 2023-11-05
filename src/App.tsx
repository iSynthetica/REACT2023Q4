import { Outlet } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
// import Shop from './components/Shop';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  );
}

export default App;
