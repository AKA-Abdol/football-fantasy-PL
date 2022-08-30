import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SoccerField from "./components/SoccerField"
import PageHeader from './components/PageHeader';
import PlayGroundBar from './components/PlayGroundBar';
import DateBar from './components/DateBar';
import './App.css';
import MainList from './components/mainListComponents/MainPlayerList';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignUp />} />
          <Route path="prices" element={<Home />} />
          <Route path="events" element={<Home />} />
          <Route path="profile" element={<Home />} />
          <Route path="sth" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
