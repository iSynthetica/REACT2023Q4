import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Shop from '../pages/Shop';
import ProductDetails from '../components/ProductDetails/ProductDetails';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Shop />,
          children: [{ path: 'product/:id', element: <ProductDetails /> }],
        },
        {
          path: 'page/:page',
          element: <Shop />,
          children: [{ path: 'product/:id', element: <ProductDetails /> }],
        },
      ],
    },
  ],
  { basename: '/REACT2023Q4' }
);

export default router;
