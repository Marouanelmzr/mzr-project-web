import { useState } from 'react'
import './App.css'
import MainLayout from '../Layouts/MainLayout'
import { Container } from 'react-bootstrap'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
]}
  
]);
const App = () => {
  return <RouterProvider router={router} />;
  
};

export default App