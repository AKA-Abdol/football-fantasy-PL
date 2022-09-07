import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Authentication from './pages/Authentication';

function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="award" element={<Home />} />
            <Route path="event" element={<Home />} />
            <Route path="profile" element={<Home />} />
            <Route path="transfer" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
