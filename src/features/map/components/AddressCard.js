import { Card } from 'antd';
import { useMapContext } from '../context';
import './AddressCard.css';

function AddressCard() {
  const { selectedAddress, selectedPlace } = useMapContext();

  return (
    <Card
      className="address-card"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '14px',
        width: 300,
        padding: '4px',
      }}
    >
      <h2 className="address-card-info-title">{selectedPlace.title}</h2>
      <p className="address-card-info">{selectedPlace.subTitle}</p>
      <hr />
      <p className="address-card-info">
        <b>Address:</b>
      </p>
      <p className="address-card-info">{selectedAddress}</p>
    </Card>
  );
}

export default AddressCard;
