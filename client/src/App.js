import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Contact, ErrorHandling, Login, Register, Profile, ProfileEdit, PrivacyPolicy, TermsOfUse } from "./pages/index";
import TemplatePage from "./pages/templatesPage/TemplatesPage";
import { CookieBanner } from "./components";

function App() {
  // const [showCookieConsent, setShowCookieConsent] = useState(false);

  // useEffect(() => {
  //   const hasConsented = localStorage.getItem("cookieConsent");
  //   console.log("hasConsented: ", hasConsented);
  //   setShowCookieConsent(!hasConsented);
  // }, []);

  // const handleCookieConsent = () => {
  //   localStorage.setItem("cookieConsent", "true");
  //   setShowCookieConsent(false);
  //   console.log("Cookie consent accepted!");
  // };

  // console.log("showCookieConsent: ", showCookieConsent);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/templates">
          <TemplatePage />
        </Route>
        <Route path="/errors">
          <ErrorHandling />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/profile/edit">
          <ProfileEdit />
        </Route>
        <Route path="/terms">
          <TermsOfUse />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
      </Switch>
      {/* {showCookieConsent && <CookieBanner onAccept={handleCookieConsent} />} */}
    </Router>
  );
}

export default App;
