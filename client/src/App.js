import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./pages/Articles/Articles";
import Favorites from "./pages/Favorites/Favorites";
import NoMatch from "./pages/NoMatch/NoMatch";
import Summary from "./pages/Summary/Summary";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
          <Route exact path = "/" component = { Articles } />
          <Route exact path = "/articles" component = { Articles } />
          <Route exact path = "/articles/favorites" component = { Favorites } />
          <Route exact path = "/articles/:id" component = { Summary } />
          <Route component={NoMatch} />
            <h1>Hello World</h1>
      </Switch>
    </div>
  </Router>
);

export default App;
