import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

function GoogleLoginAuth() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 pt-4">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
            const USER_CREDENTIAL = jwtDecode(credentialResponse.credential);
            console.log(USER_CREDENTIAL);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </>
  );
}

export default GoogleLoginAuth;
