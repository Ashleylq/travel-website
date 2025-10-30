import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/homepage/homepage.jsx';
import DestinationsPage from './Pages/destinationsPage/DestinationsPage.jsx';
import FavouritesPage from './Pages/favouritesPage/favouritesPage.jsx';
import DetailsPage from './Pages/detailsPage/details.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([{
  path : '/',
  element : <App/>,
  children : [{
    index : true,
    element : <Homepage/>
  },{
    path : 'destinations',
    element : <DestinationsPage/>
  },{
    path : 'favourites',
    element : <FavouritesPage/>
  },{
    path : 'details/:cityname',
    element : <DetailsPage/>
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
