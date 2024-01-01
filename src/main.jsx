import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EelementError from './EelementError';
import Auth from './Auth';
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaskDashboard from './Tasks/TaskDashboard.jsx';
import Home from './Home.jsx';
import Register from './Registration.jsx';
import Login from './Login.jsx';
import Private from './Private.jsx';
const qc = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement:<EelementError/>,
    children:[
      {
        path:"/task",
        element:<Private><TaskDashboard/></Private> 
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/registration",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
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
