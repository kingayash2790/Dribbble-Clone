import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import CreateProfile from "./components/CreateProfile";
import WhyThisPage from "./components/WhyThisPage";
// import ProfilePage from './components/ProfilePage';
import { UserProvider } from "./components/UserContext";
import { FooterWithSocialLinks } from "./components/Footer";

import Email from "./components/Email";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <Switch>
    //       <Route exact path="/" component={LandingPage} />
    //       <Route exact path="/signup" component={Signup} />
    //       {/* Add more routes for other components */}
    //     </Switch>
    //   </div>
    // </Router>
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            {/* Defining the paths of various files */}
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar />
                  <LandingPage />
                  <FooterWithSocialLinks />
                </>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <>
                  <Signup />
                </>
              }
            />
            <Route
              exact
              path="/createprofile"
              element={
                <>
                  <Navbar />
                  <CreateProfile />
                  <FooterWithSocialLinks />
                </>
              }
            />
            <Route
              exact
              path="/whydribbble"
              element={
                <>
                  <Navbar />
                  <WhyThisPage />
                  <FooterWithSocialLinks />
                </>
              }
            />
            <Route
              exact
              path="/emailverification"
              element={
                <>
                  <Email />
                  <FooterWithSocialLinks />
                </>
              }
            />
            
            {/* <Route exact path="/cardspage" element={<CardsPage />}  />           */}
            {/* <Route exact path="/profilepage" element={<ProfilePage />}  />           */}
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
