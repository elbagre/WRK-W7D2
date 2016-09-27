import { KEY_PRESSED, KEY_RELEASED } from '../actions/note_actions.js';
import { NOTE_NAMES } from '../util/tones.js';

const validKey = (array, key) => {
  return array.includes(key);
}

const notesReducer = (state = [], action) => {

  switch(action.type) {
    case KEY_PRESSED:
      if (validKey(NOTE_NAMES, action.key)){
        if (state.includes(action.key)){
          return state;
        } else {
          return ([
            ...state,
            action.key
          ]);
        }
      } else {
        return state;
      }
    case KEY_RELEASED:
      if (validKey(state, action.key)) {
        const keyIdx = state.indexOf(action.key);
        return ([
          ...(state.slice(0, keyIdx)),
          ...(state.slice(keyIdx + 1))
        ]);
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default notesReducer;
