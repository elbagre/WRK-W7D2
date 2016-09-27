import { ADD_NOTES, START_RECORDING, STOP_RECORDING } from '../actions/tracks_actions.js';
import { merge } from 'lodash/merge';

let currTrackId = 0;

export const tracksReducer = (state = {}, action) => {
  let currentTrack = state[currTrackId];
  switch(action.type) {
    case START_RECORDING:
      currTrackId++;
      const track = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      return merge(state, { [track.id]: track });
    case STOP_RECORDING:
      const roll = { notes: [], timeSlice: action.timeNow - state[currTrackId].timeStart };
      const new_state = state[currTrackId].roll.concat(roll);
      return merge(state[currTrackId], new_state);
    case ADD_NOTES:
      const sweetRoll = { notes: action.notes, timeSlice: action.timeNow - state[currTrackId].timeStart };
      const coolState = state[currTrackId].roll.concat(sweetRoll);
      return merge(state[currTrackId], coolState);
    default:
      return state;
  }

};

export default tracksReducer;
