import { Routes, Route } from 'react-router-dom';
import { useGoogleMap } from './features/map';
import HomePage from './pages/Home';
import CheckPage from './pages/Check';
import AboutPage from './pages/About';
import { getPath } from './router-paths';
import './App.css';

const libraries = ['places'];

function App() {
  useGoogleMap({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return (
    <div className="App">
      <Routes>
        <Route path={getPath('home')} element={<HomePage />} />
        <Route path={getPath('check')} element={<CheckPage />} />
        <Route path={getPath('about')} element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
