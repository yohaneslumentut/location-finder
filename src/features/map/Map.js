import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDefaultLocation } from './index';
import withGoogleMap from './components/withGoogleMap';
import Spinner from '../../components/Spinner/Spinner';
import './Map.css';

function Map({ scriptLoaded, location }) {
  const mapRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDefaultLocation());
  }, [dispatch]);

  const mapNodeRef = useCallback(
    (node) => {
      if (node) {
        const map = new window.google.maps.Map(node, {
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
        mapRef.current = map;
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
