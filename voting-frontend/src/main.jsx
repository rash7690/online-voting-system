import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import {

  GoogleOAuthProvider

} from "@react-oauth/google";

ReactDOM.createRoot(

  document.getElementById("root")

).render(

  <GoogleOAuthProvider

    clientId="67103157981-ti6ssff8igj6ka5mlmmfth6317jepfbb.apps.googleusercontent.com"

  >

    <React.StrictMode>

      <App />

    </React.StrictMode>

  </GoogleOAuthProvider>
);