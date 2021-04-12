import { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";

import "./assets/styles/main.scss";

const Religion = lazy(() => import("./pages/Religion"));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Content>
          <Switch>
            <Route path="/religion" exact>
              <Religion />
            </Route>
          </Switch>
        </Content>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
