import {
  FETCH_DEFAULT_LOCATION,
  FETCH_DEFAULT_LOCATION_FULFILLED,
  RESET_MAP,
  SET_IS_READY,
  SET_IS_RELOAD_OK,
  SET_LANGUAGE,
  SET_MAP,
  SET_SELECTED_ADDRESS,
  SET_SELECTED_PLACE,
} from './types';

const initialState = {
  autocomplete: null,
  map: null,
  isFetchingLoc: false,
  isReady: false,
  isReloadOk: false,
  language: null,
  location: null,
  marker: null,
  places: null,
  placesDetails: null,
  status: null,
  selectedAddress: null,
  selectedPlace: null,
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEFAULT_LOCATION:
      return {
        ...state,
        isFetchingLoc: true,
      };

    case FETCH_DEFAULT_LOCATION_FULFILLED:
      return {
        ...state,
        isFetchingLoc: false,
        location: action.payload,
        status: 'OK',
      };

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    case SET_IS_READY:
      return {
        ...state,
        isReady: action.payload,
      };

    case SET_IS_RELOAD_OK:
      return {
        ...state,
        isReloadOk: action.payload,
      };

    case SET_MAP: {
      const { google, location, mapConfigs, mapNode } = action.payload;

      if (!google.maps) {
        return {
          ...state,
        };
      }

      const mapInstance = new google.maps.Map(mapNode, {
        center: { lat: location.lat, lng: location.lng },
        ...mapConfigs,
      });

      return {
        ...state,
        autocomplete: new google.maps.places.AutocompleteService(),
        map: mapInstance,
        marker: new google.maps.Marker({ map: mapInstance }),
        places: google.maps.places,
        placesDetails: new google.maps.places.PlacesService(mapInstance),
      };
    }

    case RESET_MAP:
      return {
        ...state,
        autocomplete: null,
        map: null,
        marker: null,
        places: null,
        placesDetails: null,
      };

    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: action.payload,
      };

    case SET_SELECTED_PLACE:
      return {
        ...state,
        selectedPlace: action.payload,
      };

    default:
      return state;
  }
};
