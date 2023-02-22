import React from "react";
import PageNavigator from "./PageNavigator";
import style from './styling/stylesheet.css'
import buttonStyles from './styling/button-stylesheet.css'

//App shows page using page navigator.
function App() {
  return (
    <div className="App">
        <PageNavigator/>
    </div>
  );
}

export default App;
