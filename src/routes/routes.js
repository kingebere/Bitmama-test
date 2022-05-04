import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// Utilizing the React suspense lazy loading functionality

const LoginPage = React.lazy(() => import("../pages/LoginPage/LoginPage"));

const Home = React.lazy(() => import("../pages/Home/Home"));

const routes = () => (
  <React.Suspense fallback={<Spinner />}>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </React.Suspense>
);
export default routes;
