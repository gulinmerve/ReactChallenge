import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry (emojipedias) {
  return <Entry 
    key = {emojipedias.id}
    emoji = {emojipedias.emoji}
    name = {emojipedias.name}
    meaning = {emojipedias.meaning}

  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
