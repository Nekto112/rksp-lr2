import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import OceanariumComponent from "./components/OceanariumComponent";
import navBar from "./pages/navBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css"; 
import MainComponent from "./components/MainComponent";


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route 
              exact path="/" 
              element={<MainComponent />} 
            />

            <Route 
              path="/oceanarium" 
              element={<OceanariumComponent />} 
            />

            <Route
              path="/contact"
              element={<OceanariumComponent />}
            />

            <Route 
              path="/blogs" 
              element={<OceanariumComponent />} 
            />

            <Route
                path="/sign-up"
                element={<OceanariumComponent />}
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
