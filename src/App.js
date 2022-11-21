// import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Contact from './Components/Donate';
import Home from './Components/Home';
import Donations from './Components/Donate';

class App extends React.Component {

    render() {
      return(
        <>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
       
              <Route path="/Contacts" component={Contact}/>

              <Route path="/Dons" component={Donations}/>

            </Switch>
          </Router>
        </>

      );
    }

}

export default App;
