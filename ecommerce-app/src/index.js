import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import $ from 'jquery';
//import Popper from 'popper.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import components
import Login from './components/login';
import Dashboard from './components/dashboard';
import AddUser from './components/adduser';
import AddProduct from './components/addproduct';
import AddCategory from './components/addcategory';

import UserLogin from './components/userlogin';
import Homepage from './components/userhome';

import UploadTry from './components/uploadtry';

const router = createBrowserRouter([

  {
    path: "admin/upload",
    element: <UploadTry />,
  },

  {
    path: "admin/login",
    element: <Login />,
  },
  {
    path: "admin/dashboard",
    element: <Dashboard />,
  },

  {
    path: "admin/dashboard/adduser",
    element: <AddUser />,
  },

  {
    path: "admin/dashboard/addproduct",
    element: <AddProduct />,
  },

  {
    path: "admin/dashboard/addcategory",
    element: <AddCategory />,
  },

  {
    path: "/",
    element: <UserLogin />,
  },
  {
    path: "user/homepage",
    element: <Homepage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
