import { combineReducers } from "redux";
import isRecording from './is_recording_reducer.js';
import tracks from './tracks_reducer.js';
import notes from "./notes_reducer.js";



const combinedReducers = combineReducers({
  notes,
  isRecording,
  tracks
});

export default combinedReducers;
