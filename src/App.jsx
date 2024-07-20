import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for pages that use the Layout component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Separate route for the login page without the Layout component */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
