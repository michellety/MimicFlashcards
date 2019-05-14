import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from "./pages/Cards";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Practice from "./pages/Practice";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Navbar from './components/Navbar';
import { CounterProvider } from './context';

const initialState = { currentUser: {} };
const UserContext = React.createContext(initialState);

function App() {
  return (
    <Router>
      <CounterProvider>
      <div>
        <Navbar />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/cards/:id" component={Detail} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/practice" component={Practice}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
     </CounterProvider> 
    </Router>
  );
}

export default App;
