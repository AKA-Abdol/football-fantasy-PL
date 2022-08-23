import React from 'react';
import SoccerField from "./components/SoccerField"
import PlayGroundBar from './components/PlayGroundBar';
import './App.css';
import MainList from './components/mainListComponents/MainPlayerList';

function App() {
  return (
    <div className="flex flex-col px-16 h-screen w-3/5">
      <PlayGroundBar/>
      <SoccerField/>
    </div>
  );
}

export default App;
