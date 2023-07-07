import React from "react";
import jwtDecode from "jwt-decode";

function GoogleRegister() {
  function handleCredentialResponse(response) {
    var userObject = response.credential;
    console.log("Encoded JWT id Tocken: " + userObject);
    var decodeduserObject = jwtDecode(userObject);
    console.log("Decoded JWT id Tocken: " + JSON.stringify(decodeduserObject));
    console.log("User ID: " + decodeduserObject.sub);
  }
  //global google
  const google = window.google;
  window.onload = function () {
    google.accounts.id.initialize({
      client_id:
        "25963119610-ubc8001rfa4nd2huaosukq4r3hfpd9b3.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("googleLoginButton"),
      { theme: "outline", size: "large", text: "Sign up with Google" } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  };
  return (
    <>
      <div
        id="googleLoginButton"
        className="w-full justify-self-center pt-4 pb-4"
      ></div>
    </>
  );
}

export default GoogleRegister;
