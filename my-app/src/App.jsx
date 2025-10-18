import Navbar from './components/Navbar/Navbar.jsx';
import Homepage from './Pages/homepage/homepage.jsx';
import DestinationsPage from './Pages/destinationsPage/DestinationsPage.jsx';
import DetailsPage from './Pages/detailsPage/details.jsx';
import { destinations } from './data/destinations.js';

function App() {
  return (
    <>
      <Navbar/>
      <DestinationsPage/>
    </>
  )
}

export default App
