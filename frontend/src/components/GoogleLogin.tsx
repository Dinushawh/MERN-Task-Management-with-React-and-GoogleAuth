import React from "react";

import { GoogleLogin } from "@react-oauth/google";

function GoogleLogin2() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 pt-4">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse.credential);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </>
  );
}

export default GoogleLogin2;
