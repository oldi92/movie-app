import React from "react";

import { Route, Switch } from "react-router";
import Layout from "./hoc/Layout/Layout";
import Home from "./containers/Home/Home";
import "./App.css";
import Category from "./containers/Category/Category";
import MyList from "./containers/MyList/MyList";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/" component={Category} />
          <Route path="/mylist" component={MyList} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
