import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Doctor from './Doctor';
import Queue from './Queue';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <App />
  // },
  {
    path: '/',
    element: <Doctor />
  },
  {
    path: '/Queue',
    element: <Queue />
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


