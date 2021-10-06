import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/common/Navbar";
import UserDetails from "./Components/user/UserDetails";
import Users from "./Components/user/Users";
import NoPageFound from "./Components/common/NoPageFound";
import Login from "./Components/user/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';

function App() {
  return (
    <Router history={history}>
    <NavBar />
    <Switch>
      {/* <Route
        path="/"
        exact component={Users}
      /> */}
       <Route
        path="/"
        exact component={Login}
      />
      <Route path="/Users" exact component={Users} />
      <Route path="/UserDetails" component={UserDetails} />
      <Route path="*" component={NoPageFound} />
    </Switch>
  </Router>
  );
}

export default App;
