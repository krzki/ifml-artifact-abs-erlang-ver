import React from "react";
import { AuthProvider } from "./commons/auth";
import { CookiesProvider } from "react-cookie";
import GlobalRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

import "commons/styles/global.css";
import AppLayout from "commons/components/AppLayout";

const App = () => {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Router>
          <AppLayout>
            <GlobalRoutes />
          </AppLayout>
        </Router>
      </AuthProvider>
    </CookiesProvider>
  );
};

export default App;
