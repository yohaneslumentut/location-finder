import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDefaultLocation } from './store/actions';
import { useMapContext } from './context';
import withGoogleMap from './components/withGoogleMap';
import Spinner from '../../components/Spinner/Spinner';
import './Map.css';

function Map({ scriptLoaded, location }) {
  const initRef = useRef(false);
  const [map, setMap] = useState();
  const dispatch = useDispatch();
  const googleMap = useMapContext();

  useEffect(() => {
    dispatch(fetchDefaultLocation());
  }, [dispatch]);

  useEffect(() => {
    if (map) {
      const { maps } = window.google;
      googleMap.initMap(maps, map);
      initRef.current = true;
    }
  }, [googleMap, map]);

  const mapNodeRef = useCallback(
    (node) => {
      if (node) {
        const { maps } = window.google;
        const mapInstance = new maps.Map(node, {
          center: { lat: location.lat, lng: location.lng },
          zoom: 12,
          disableDoubleClickZoom: false,
          fullscreenControl: false,
          keyboardShortcuts: false,
          streetViewControl: false,
          scaleControl: false,
          rotateControl: false,
          panControl: false,
        });

        setMap(mapInstance);
      }
    },
    [location],
  );

  if (!scriptLoaded || !location) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return <div className="map" ref={mapNodeRef} />;
}

export default withGoogleMap(Map);
