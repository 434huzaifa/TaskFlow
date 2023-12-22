import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EelementError from './EelementError';
import Auth from './Auth';
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaskDashboard from './Tasks/TaskDashboard.jsx';
import Home from './Home.jsx';
const qc = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/task",
        element:<TaskDashboard/>
      },
      {
        path:"/",
        element:<Home/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

    <QueryClientProvider client={qc}>
      <Auth>
      <RouterProvider router={router} />
      <Outlet></Outlet>
      </Auth>
    </QueryClientProvider>,
)
