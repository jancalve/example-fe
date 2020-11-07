import './App.css';
import Agreement from './components/Agreement.jsx';
import React from "react";
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(faExclamationCircle);

function App() {
  return (
      <div>
        <Agreement/>
      </div>
  );
}

export default App;
