import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Home from './Components/Home';
import App from './App';
import User from './Components/User';
import About from './Components/About';
import Contract from './Components/Contract';
import Posts from './Components/Posts';
import UserDetails from './Components/UserDetails';
import PostDetails from './Components/PostDetails';
import ErrorPage from './Components/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/users',
        element:<User/>
      },
      {
        path: '/about',
        element:<About/>
      },
      {
        path: '/posts',
        element: <Posts />,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/postdetails/:id',
        element: <PostDetails />,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      },
      {
        path: '/contact',
        element:<Contract/>
      },
      {
        path: '/userdetails/:id',
        element: <UserDetails />,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

