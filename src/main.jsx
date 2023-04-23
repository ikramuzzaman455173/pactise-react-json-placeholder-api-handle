import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div className='text-5xl font-bold text-center text-blue-500 mt-5'>Hello React Router Dom</div>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
