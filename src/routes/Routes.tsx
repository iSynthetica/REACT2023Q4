import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import FormPage from '../pages/FormPage';
import ReactHookFormPage from '../pages/ReactHookFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/form-page',
        element: <FormPage />,
      },
      {
        path: '/react-hook-form-page',
        element: <ReactHookFormPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
