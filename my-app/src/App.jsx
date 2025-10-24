import Navbar from './components/Navbar/Navbar.jsx';
import Homepage from './Pages/homepage/homepage.jsx';
import DestinationsPage from './Pages/destinationsPage/DestinationsPage.jsx';
import DetailsPage from './Pages/detailsPage/details.jsx';
import favouritesPage from './Pages/favouritesPage/favouritesPage.jsx';
import { destinations } from './data/destinations.js';
import FavouritesPage from './Pages/favouritesPage/favouritesPage.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <FavouritesPage/>
    </>
  )
}

export default App
