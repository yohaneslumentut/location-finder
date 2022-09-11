import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useScriptLoader } from 'gmaps-script-loader';
import { mapScriptLoaded } from './features/map/store/actions';
import { useMapContextProvider, MapContext } from './features/map';
import HomePage from './pages/Home';
import CheckPage from './pages/Check';
import AboutPage from './pages/About';
import { getPath } from './router-paths';
import './App.css';

const libraries = ['places'];

function App() {
  const dispatch = useDispatch();
  const map = useMapContextProvider();

  const { loadScript, isMapReady } = useScriptLoader({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    loadScript('id', 'ID');
  }, [loadScript]);

  useEffect(() => {
    if (isMapReady) {
      dispatch(mapScriptLoaded());
    }
  }, [dispatch, isMapReady]);

  return (
    <MapContext.Provider value={map}>
      <div className="App">
        <Routes>
          <Route path={getPath('home')} element={<HomePage />} />
          <Route path={getPath('check')} element={<CheckPage />} />
          <Route path={getPath('about')} element={<AboutPage />} />
        </Routes>
      </div>
    </MapContext.Provider>
  );
}

export default App;
