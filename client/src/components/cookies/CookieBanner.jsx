import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieBanner = ({ onAccept }) => {
  return (
    <CookieConsent location="bottom" buttonText="Accept" cookieName="mywebsite-cookie" style={{ background: "yellow", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999 }} buttonStyle={{ color: "#4e503b", fontSize: "13px" }} expires={150} onAccept={onAccept}>
      We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
    </CookieConsent>
  );
};

export default CookieBanner;
