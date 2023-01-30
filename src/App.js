// import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Donations from "./Components/Donate";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/Dons" component={Donations} />

        <Route  path="/Contacts" component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
