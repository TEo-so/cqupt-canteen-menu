import React from "react";
import { NavLink, Switch, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Today from "./component/Today/index";
import Tommorow from "./component/Tommorow/index";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="tab">
          <NavLink to="/" exact className="link" activeClassName="selected">
            <div>今日菜单</div>
          </NavLink>
          <NavLink to="/tommorow" className="link" activeClassName="selected">
            <div>明日菜单</div>
          </NavLink>
        </div>
        <Switch>
          <Route path="/" exact component={Today}></Route>
          <Route path="/tommorow" component={Tommorow}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
