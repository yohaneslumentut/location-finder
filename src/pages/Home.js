import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from '../layouts/main';
import Map, {
  AddressCard,
  LanguageSelector,
  withGoogleMap,
  setSelectedAddress,
  resetMap,
} from '../features/map';

const languages = {
  bahasa: {
    language: 'id',
    region: 'ID',
  },
  english: {
    language: 'en',
    region: 'GB',
  },
  chinese: {
    language: 'zh',
    region: 'CN',
  },
  japanese: {
    language: 'ja',
    region: 'JP',
  },
  arabic: {
    language: 'ar',
    region: 'SA',
  },
};

function HomePage({ language, loadScript, selectedAddress }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (language) {
      const selected = languages[language];
      loadScript(selected.language, selected.region);
    }
  }, [language, loadScript]);

  useEffect(() => {
    dispatch(setSelectedAddress(null));
    return () => {
      dispatch(resetMap());
    };
  }, [dispatch]);

  return (
    <MainLayout>
      <Map />
      {selectedAddress && <AddressCard />}
      <LanguageSelector />
    </MainLayout>
  );
}

export default withGoogleMap(HomePage);
