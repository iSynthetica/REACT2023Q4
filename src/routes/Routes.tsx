import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from '../pages/Shop';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
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
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: '/REACT2023Q4' }
);

const Router = () => <RouterProvider router={router} />;

export default Router;
