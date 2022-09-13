import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useScriptLoader } from 'gmaps-script-loader';
import {
  fetchDefaultLocation,
  setIsReady,
  setIsReloadOk,
  setLang,
} from './features/map';
import HomePage from './pages/Home';
import CheckPage from './pages/Check';
import AboutPage from './pages/About';
import { getPath } from './router-paths';
import './App.css';

const libraries = ['places'];
const initialLanguage = 'bahasa';

function App() {
  const dispatch = useDispatch();

  const { loadScript, isMapReady, isReloadOk } = useScriptLoader({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    dispatch(setLang(initialLanguage));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDefaultLocation());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setIsReady(isMapReady));
  }, [dispatch, isMapReady]);

  useEffect(() => {
    dispatch(setIsReloadOk(isReloadOk));
  }, [dispatch, isReloadOk]);

  return (
    <div className="App">
      <Routes>
        <Route
          path={getPath('home')}
          element={<HomePage loadScript={loadScript} />}
        />
        <Route path={getPath('check')} element={<CheckPage />} />
        <Route path={getPath('about')} element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
