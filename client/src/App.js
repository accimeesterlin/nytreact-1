import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles/Articles";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Articles} />
        <h1>Hello World</h1>
      </div>
      </Router>
    );
  }
}

export default App;
