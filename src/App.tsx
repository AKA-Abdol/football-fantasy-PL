import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Authentication from './pages/Authentication';
import PageHeader from './components/PageHeader';
import Events from './pages/Events';

function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route element={<PageHeader/>}>
              <Route path="myteam" element={<Home />} />
              <Route path="award" element={<Home />} />
              <Route path="event" element={<Events />} />
              <Route path="profile" element={<Home />} />
              <Route path="transfer" element={<Home />} />
            </Route>
            <Route path="signup" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
            <Route path="authentication" element={<Authentication />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
