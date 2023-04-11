// import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Donations from "./Components/Donate";
import Galeria from "./Components/SubComp/Galeria";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/Dons" component={Donations} />

        <Route  path="/Contacts" component={Contact} />

        <Route  path="/Galerie" component={Galeria} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
