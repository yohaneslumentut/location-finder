/* eslint-disable camelcase */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AutoComplete, Input } from 'antd';
import {
  withGoogleMap,
  setSelectedAddress,
  setSelectedPlace,
} from '../map/index';
import { debounceSearch } from './index';

function Places({
  autocomplete,
  debouncedSearchTerm,
  map,
  marker,
  places,
  placesDetails,
}) {
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();

  const renderLabel = (item) => (
    <div>
      <b>{item.main_text}</b>
      <p style={{ fontSize: '12px', wordWrap: 'break-word' }}>
        {item.secondary_text}
      </p>
    </div>
  );

  const items = useMemo(
    () =>
      searchResult.map((result) => {
        const { place_id, description, structured_formatting } = result;
        return {
          key: place_id,
          value: description,
          label: renderLabel(structured_formatting),
          title: structured_formatting.main_text,
          subTitle: structured_formatting.secondary_text,
        };
      }),
    [searchResult],
  );

  useEffect(() => {
    if (debouncedSearchTerm && autocomplete) {
      autocomplete.getPlacePredictions(
        { input: debouncedSearchTerm },
        (predictions) => {
          if (predictions) {
            setSearchResult(predictions);
          }
        },
      );
    }
  }, [autocomplete, debouncedSearchTerm]);

  const handleSearch = useCallback(
    (searchValue) => {
      if (debounceSearch) dispatch(debounceSearch(searchValue));
    },
    [dispatch],
  );

  const showLocationByPlaceId = useCallback(
    (placeId) => {
      const request = {
        placeId,
        fields: ['name', 'formatted_address', 'geometry'],
      };

      placesDetails.getDetails(request, (place, status) => {
        if (status === places.PlacesServiceStatus.OK) {
          if (place.geometry) {
            map.setCenter(place.geometry.location);
            map.setZoom(14);
            marker.setPosition(place.geometry.location);
            dispatch(setSelectedAddress(place.formatted_address));
          }
        }
      });
    },
    [dispatch, map, marker, places, placesDetails],
  );

  const onSelect = useCallback(
    (_val, options) => {
      showLocationByPlaceId(options.key);
      dispatch(setSelectedPlace(options));
    },
    [dispatch, showLocationByPlaceId],
  );

  return (
    <div>
      <AutoComplete
        dropdownMatchSelectWidth={250}
        style={{
          width: 250,
        }}
        options={items}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input size="large" placeholder="Find a location ..." allowClear />
      </AutoComplete>
      Search
    </div>
  );
}

export default withGoogleMap(Places);
