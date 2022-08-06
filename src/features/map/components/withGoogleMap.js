import { connect } from 'react-redux';

export default function withGoogleMap(Component) {
  function mapStateToProps(state) {
    const { googleMap } = state;
    return {
      ...googleMap,
    };
  }

  return connect(mapStateToProps)(Component);
}
