import { connect, useDispatch } from 'react-redux';
import ContentLayout from '../layouts/content';
import PingPong, { PING } from '../features/pingpong';

function CheckPage({ isPinging, milliseconds }) {
  const dispatch = useDispatch();

  const ping = () => dispatch({ type: PING });

  return (
    <ContentLayout title="Check Configuration">
      <div>
        <PingPong
          isPinging={isPinging}
          milliseconds={milliseconds}
          ping={ping}
        />
      </div>
    </ContentLayout>
  );
}

function mapStateToProps(state) {
  const { ping } = state;
  return {
    isPinging: ping.isPinging,
    milliseconds: ping.milliseconds,
  };
}

export default connect(mapStateToProps)(CheckPage);
