import React from "react";
import ReactDOM from "react-dom";
import Note from "./util/note.js";
import Root from "./components/root.jsx";
import Store from "./store/store.js";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root store={Store()}/>, document.getElementById("root"));
});

window.Note = Note;
window.Store = Store;
