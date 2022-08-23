import React from 'react';
import SoccerField from "./components/SoccerField"
import PageHeader from './components/PageHeader';
import PlayGroundBar from './components/PlayGroundBar';
import './App.css';
import MainList from './components/mainListComponents/MainPlayerList';

function App() {
  return (
    <div className="flex flex-col h-screen w-full theme-font items-center">
      <div className='Header'>
        <PageHeader/>
      </div>

      <div className='Body flex flex-row mt-16 space-x-6'>
        <div className='soccer-field-all flex flex-col'>
          <PlayGroundBar/>
          <SoccerField/>
        </div>

        <div className='side-list'>
          <MainList/>
        </div>
      </div>
    </div>
  );
}

export default App;
