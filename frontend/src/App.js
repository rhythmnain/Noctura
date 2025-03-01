import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes"; // Importing routes
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import "./styles/global.css"; // Import global styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />  {/* This will manage all the routes */}
      <Footer />
    </Router>
  );
};

export default App;
