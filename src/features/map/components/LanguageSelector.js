import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setLang, setSelectedAddress } from '../store/actions';
import withGoogleMap from './withGoogleMap';
import './LanguageSelector.css';

const { Option } = Select;

const options = ['bahasa', 'english', 'chinese', 'japanese', 'arabic'];

function LanguageSelector({ language, isReloadOk }) {
  const [selectedLang, setSelectedLang] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedLang(language);
  }, [language]);

  const handleChange = (value) => {
    dispatch(setSelectedAddress(null));
    dispatch(setLang(value));
    setSelectedLang(value);
  };

  if (!selectedLang || !isReloadOk) {
    return null;
  }

  return (
    <div style={{ position: 'absolute', left: 520, top: 9, zIndex: 50 }}>
      <Select
        defaultValue={selectedLang}
        style={{
          width: 120,
          fontSize: 18,
          height: 40,
        }}
        onChange={handleChange}
      >
        {options.map((opt) => (
          <Option value={opt} key={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default withGoogleMap(LanguageSelector);
