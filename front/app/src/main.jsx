import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { BrowserRouter } from "react-router";
import Home from './pages/Home.jsx'
import OrderServicesPage from './pages/OrderServicesPage.jsx'
import AreasPage from './pages/Areaspage.jsx';
// import { StrictMode } from 'react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/orderServices",
    element: <OrderServicesPage/>
  },{

    path: "/areas",
    element: <AreasPage/>
  }

])



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>,
)