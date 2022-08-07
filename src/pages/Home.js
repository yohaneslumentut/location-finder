import MainLayout from '../layouts/main';
import Map, { useMapContext, AddressCard } from '../features/map';

function HomePage() {
  const { selectedAddress } = useMapContext();

  return (
    <MainLayout>
      <Map />
      {selectedAddress && <AddressCard />}
    </MainLayout>
  );
}

export default HomePage;
