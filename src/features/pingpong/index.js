import { PING, PONG } from './store/types';
import { pingAction, pongAction } from './store/actions';
import { pingReducer } from './store/reducers';
import { pingEpic } from './store/epics';
import PingPong from './PingPong';

export { PING, PONG, pingAction, pongAction, pingReducer, pingEpic };

export default PingPong;
