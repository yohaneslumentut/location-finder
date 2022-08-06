import { Spinner as SpinnerLoader } from '../../assets/icons';
import './Spinner.css';

export default function Spinner() {
  return (
    <div className="spinner-container">
      <SpinnerLoader />
    </div>
  );
}
