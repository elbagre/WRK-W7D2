import React from "react";
import ReactDOM from "react-dom";
import Note from "./util/note.js";

class Synthesizer extends React.Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }

  render(){ return <p>YO BUDDY</p>;}
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Synthesizer />, document.getElementById("root"));
});

window.Note = Note;
