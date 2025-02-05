import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-trip/[tripId]/index.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  }
  ,
  {
    path:'/view-trip/:tripId',
    element:<ViewTrip/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <GoogleOAuthProvider clientId='1072125674283-n4tblj318qpo85aast1a9l1h0s0cc7th.apps.googleusercontent.com'>
    <Header/>
    <RouterProvider router={router}/>
    </GoogleOAuthProvider>

  </StrictMode>,
)
