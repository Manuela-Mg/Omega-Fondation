// import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Donations from "./Components/Donate";
import Galeria from "./Components/SubComp/Galeria";
import Pellicule from "./Components/SubComp/Pellicule";
import OrphPellicule from "./Components/SubComp/OrphPellicule";

import About from "./Components/About";
import Articles from "./Components/Articles";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/A-Propos" component={About} />

        <Route path="/Dons" component={Donations} />

        <Route  path="/Contact" component={Contact} />

        <Route  path="/Articles" component={Articles} />

        <Route  path="/Galerie" component={Galeria} />

        <Route  path="/Pellicule-Hopital" component={Pellicule}/>

        <Route  path="/Pellicule-Orphelinat" component={OrphPellicule}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
