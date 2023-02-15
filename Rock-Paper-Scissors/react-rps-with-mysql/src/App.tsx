import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
  } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import GamePage from './Pages/GamePage/GamePage';
import Page404 from './Pages/Page404/Page404';
import AllPlayersPage from './Pages/AllPlayersPage/AllPlayersPage';
import StatisticsPage from './Pages/StatisticsPage/StatisticsPage';
import './App.css';
import LanguageSwitcher from './Components/LanguageSwitcher/LanguageSwitcher';


const App = () => (
  
    <Router>
      <LanguageSwitcher/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/all-players" element={<AllPlayersPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
);
  
export default App;
  