import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones.js';
import Note from '../../util/note.js';
import $ from 'jquery';
import NoteKey from './note_key.jsx';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map((note, idx) => {
      return new Note(TONES[note]);
    });

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  componentDidMount() {
    $(document).on('keydown', (e) => this.onKeyDown(e));
    $(document).on('keyup', (e) => this.onKeyUp(e));
  }

  playNotes() {
    NOTE_NAMES.forEach( (note, idx) => {
      if(this.props.notes.indexOf(note) === -1){
        this.notes[idx].stop();
      } else {
        this.notes[idx].start();
      }
    });
  }

  render() {
    this.playNotes();
    return (
      <ul className="group keyboard">
        {
          NOTE_NAMES.map( (note, idx) => {
            return <li className="key" key={idx}><NoteKey name={note} />{note}</li>;
          })
        }
      </ul>
    );
  }
}

export default Synth;
