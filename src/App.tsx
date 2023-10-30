import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Shop from './components/Shop';

function App() {
  return (
    <>
      <ErrorBoundary>
        <Shop />
      </ErrorBoundary>
    </>
  );
}

export default App;
