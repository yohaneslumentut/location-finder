import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoadScript } from '@react-google-maps/api';
import { mapScriptLoaded } from '../store/actions';

export const useGoogleMap = ({ libraries, googleMapsApiKey }) => {
  const dispatch = useDispatch();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      dispatch(mapScriptLoaded());
    }
  }, [dispatch, isLoaded]);
};
