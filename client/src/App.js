import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import OceanariumComponent from "./components/OceanariumComponent";
import NavigationBarComponent from "./components/NavigationBarComponent.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css"; 
import MainComponent from "./components/MainComponent";
import CatalogComponent from "./components/CatalogComponent";


function App() {
  return (
    <div>
      <Router>
        {<NavigationBarComponent />}
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
              path="/catalog"
              element={<CatalogComponent />}
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
