import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import Camera from './Camera'
import AddObject from './AddObject';
import EditObject from './EditObject';
import ShowObject from './ShowObject';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },{
    path: "/camera",
    element: <Camera />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add-object",
    element: <AddObject />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit-object",
    element: <EditObject />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/show-object",
    element: <ShowObject />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
