import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routes/Routes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user.reducer";
import { ThemeProvider } from "./ThemeContext";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="25963119610-ubc8001rfa4nd2huaosukq4r3hfpd9b3.apps.googleusercontent.com">
      <ThemeProvider>
        <BrowserRouter>
          <Provider store={store}>
            <ToastContainer />
            <PageRoutes />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
