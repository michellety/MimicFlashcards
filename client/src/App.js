import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from "./pages/Cards";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Cards} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/cards/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
