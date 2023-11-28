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
import HeaderComponent from "./components/HeaderComponent.js";
import FishComponent from "./components/FishComponent.js";
import MolluscComponent from "./components/MolluscComponent.js";
import FishCatalogComponent from "./components/FishCatalogComponent.js";
import MolluscCatalogComponent from "./components/MolluscCatalogComponent.js";


function App() {
  return (
    <div>
      <Router>
        {<NavigationBarComponent />}
        {<HeaderComponent/>}
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

            <Route
              path="/fish"
              element={<FishComponent />}
            />

            <Route
              path="/mollusc"
              element={<MolluscComponent />}
            />

            <Route
              path="/fishcatalog"
              element={<FishCatalogComponent />}
            />

            <Route
              path="/mollusccatalog"
              element={<MolluscCatalogComponent />}
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
