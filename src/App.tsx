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
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="prices" element={<Home />} />
            <Route path="events" element={<Home />} />
            <Route path="profile" element={<Home />} />
            <Route path="transfer" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
