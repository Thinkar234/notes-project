import React from "react";
import "./App.css";
import { Notes } from "./components/Notes/Notes";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Notes />
      </div>
    </div>
  );
};

export default App;
