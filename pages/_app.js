import React from "react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";
import "../src/config/firebase.config";
import { AuthProvider } from "../src/hook/auth";
import AuthStateChanged from "../src/layout/AuthStateChanged";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <StateContext>
      <Layout>
<AuthStateChanged>
        <Toaster />
          <Component {...pageProps} />
        </AuthStateChanged>
      </Layout>
    </StateContext>
    </AuthProvider>
  );
}

export default MyApp;
