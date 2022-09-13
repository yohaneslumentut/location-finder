import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMap } from './store/actions';
import withGoogleMap from './components/withGoogleMap';
import './Map.css';

const mapConfigs = {
  zoom: 12,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  keyboardShortcuts: false,
  streetViewControl: false,
  scaleControl: false,
  rotateControl: false,
  panControl: false,
};

function Map({ isReady, location }) {
  const [mapNode, setMapNode] = useState();
  const dispatch = useDispatch();

  const nodeRef = useCallback((node) => {
    if (node) {
      setMapNode(node);
    }
  }, []);

  useEffect(() => {
    const { google } = window;
    if (isReady && location && mapNode) {
      dispatch(setMap({ google, mapNode, location, mapConfigs }));
    }
  }, [dispatch, isReady, location, mapNode]);

  return <div className="map" ref={nodeRef} />;
}

export default withGoogleMap(Map);
