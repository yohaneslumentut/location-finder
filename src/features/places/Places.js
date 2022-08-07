/* eslint-disable camelcase */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AutoComplete, Input } from 'antd';
import { useMapContext, withGoogleMap } from '../map/index';
import { debounceSearch } from './index';

function Places({ debouncedSearchTerm }) {
  const [, setValue] = useState('');
  const dispatch = useDispatch();

  const {
    searchLocation,
    searchResult,
    showLocationByPlaceId,
    setSelectedPlace,
  } = useMapContext();

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
    if (debouncedSearchTerm) {
      searchLocation(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, searchLocation]);

  const handleSearch = useCallback(
    (searchValue) => {
      setValue(searchValue);
      if (debounceSearch) dispatch(debounceSearch(searchValue));
    },
    [dispatch, setValue],
  );

  const onSelect = useCallback(
    (_val, options) => {
      showLocationByPlaceId(options.key);
      setSelectedPlace(options);
    },
    [showLocationByPlaceId, setSelectedPlace],
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
