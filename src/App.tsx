import React from 'react';
import SoccerField from "./components/SoccerField"
import PlayGroundBar from './components/PlayGroundBar';
import './App.css';
import MainList from './components/mainListComponents/MainPlayerList';

function App() {
  return (
    <div className="flex flex-col px-16 h-screen w-full">
      <div className='Header w-full'>

      </div>

      <div className='Body flex flex-row w-1/2'>
        <div className='soccer-field-all flex flex-col'>
          <PlayGroundBar/>
          <SoccerField/>
        </div>

        <div className='side-list'>

        </div>
      </div>
    </div>
  );
}

export default App;
