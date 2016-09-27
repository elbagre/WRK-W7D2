import { ADD_NOTES, START_RECORDING, STOP_RECORDING } from '../actions/tracks_actions.js';

export const recording = (state = false, action) => {
  switch (action.type) {
    case START_RECORDING:
      return true;
    case STOP_RECORDING:
      return false;
    default:
      return state;
  }
};

export default recording;
