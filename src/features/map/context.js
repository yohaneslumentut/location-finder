/* eslint-disable consistent-return */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export const MapContext = createContext({
  map: undefined,
  marker: undefined,
  message: undefined,
  placesDetails: undefined,
  searchLocation: undefined,
  searchResult: undefined,
  searchStatus: undefined,
  showLocationByPlaceId: undefined,
  selectedAddress: undefined,
  selectedPlace: undefined,
  setSelectedAddress: undefined,
  initMap: undefined,
});

export function useMapContext() {
  return useContext(MapContext);
}

export const useMapContextProvider = () => {
  const [message, setMessage] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchStatus, setSearchStatus] = useState('');
  const [googleMaps, setGoogleMaps] = useState();
  const [map, setMap] = useState();
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedPlace, setSelectedPlace] = useState();

  const initMap = (googleMapsInstance, mapInstance) => {
    setGoogleMaps(googleMapsInstance);
    setMap(mapInstance);
  };

  const autocomplete = useMemo(() => {
    if (googleMaps) {
      return new googleMaps.places.AutocompleteService();
    }
  }, [googleMaps]);

  const places = useMemo(() => {
    if (googleMaps) {
      return googleMaps.places;
    }
  }, [googleMaps]);

  const placesDetails = useMemo(() => {
    if (places && map) {
      return new places.PlacesService(map);
    }
  }, [places, map]);

  const marker = useMemo(() => {
    if (googleMaps && map) {
      return new googleMaps.Marker({ map });
    }
  }, [googleMaps, map]);

  const bounds = useMemo(() => {
    if (googleMaps) {
      return new googleMaps.LatLngBounds();
    }
  }, [googleMaps]);

  const showLocationByPlaceId = useCallback(
    (placeId) => {
      const request = {
        placeId,
        fields: ['name', 'formatted_address', 'geometry'],
      };

      placesDetails.getDetails(request, (place, status) => {
        if (status === places.PlacesServiceStatus.OK) {
          if (!place.geometry) {
            setMessage('Selected place contains no geometry');
            return;
          }

          marker.setPosition(place.geometry.location);

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
          map.fitBounds(bounds);

          setSelectedAddress(place.formatted_address);
        }
      });
    },
    [bounds, marker, map, places, placesDetails],
  );

  const searchLocation = useCallback(
    (searchTerm) => {
      autocomplete.getPlacePredictions(
        { input: searchTerm },
        (predictions, status) => {
          setSearchResult(predictions);
          setSearchStatus(status);
        },
      );
    },
    [autocomplete],
  );

  return {
    map,
    marker,
    message,
    placesDetails,
    searchLocation,
    searchResult,
    searchStatus,
    showLocationByPlaceId,
    selectedAddress,
    selectedPlace,
    setSelectedPlace,
    initMap,
  };
};
