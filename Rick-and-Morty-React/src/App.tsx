import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CharactersPage from './Pages/CharactersPage/CharactersPage';
import EpisodesPage from './Pages/EpisodesPage/EpisdoesPage';
import LocationsPage from './Pages/LocationsPage/LocationsPage';
import Page404 from './Pages/Page404/Page404';
import Header from './Components/Header';
import CharacterPage from './Pages/CharacterPage/CharacterPage';
import './App.css'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
      <Route path="/episodes" element={<EpisodesPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>
);

export default App;