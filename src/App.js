import React from 'react';
import './App.css';

const App = () =>{

  const APP_ID = '67d5cf96';
  const APP_KEY = "6e2d301f604d374d03b6b26a030b0fc1";
  const expReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
