import { connect } from 'react-redux';

export default function withGoogleMap(Component) {
  function mapStateToProps(state) {
    const { googleMap, places } = state;
    return {
      ...googleMap,
      debouncedSearchTerm: places.debouncedSearchTerm,
    };
  }

  return connect(mapStateToProps)(Component);
}
