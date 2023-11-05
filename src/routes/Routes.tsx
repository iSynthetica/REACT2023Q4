import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Shop from '../pages/Shop';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '', element: <Shop /> },
        { path: 'page/:page', element: <Shop /> },
      ],
    },
  ],
  { basename: '/REACT2023Q4' }
);

export default router;
