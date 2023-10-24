import LandingPage from "./containers/LandingPage";
import AdminPage from "./containers/AdminPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ForgotPasswordPage from "./containers/ForgotPasswordPage";
import UnauthorizedPage from "./containers/Unauthorized";
import RequireAuth from "./auth/RequireAuth";

const commonRoutes = [
  { path: "/settings/appearance", element: <AdminPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/unauthorized", element: <UnauthorizedPage /> },
  { path: "/", element: <LandingPage /> },
];

export default commonRoutes;
