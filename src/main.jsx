import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import UserProfile from './Components/UserProfile/UserProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: 
    [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path : "/SignUpPage",
        element : <SignUp></SignUp>
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
