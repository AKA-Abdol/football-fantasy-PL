import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transfers from "./pages/Transfers";
import Home from "./pages/Home";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Authentication from "./pages/Authentication";
import PageHeader from "./components/PageHeader";
import Events from "./pages/Events";
import FollowModal from "./components/eventsComponents/FollowModal";
import SoccerField from "./components/transfer/SoccerField";
import ProfileForm from "./pages/ProfileForm";

function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route element={<PageHeader />}>
              <Route path="myteam" element={<Home />} />
              <Route path="award" element={<Home />} />
              <Route path="event" element={<Events />} />
              <Route path="profile" element={<ProfileForm />} />
              <Route path="transfer" element={<Transfers />} />
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
