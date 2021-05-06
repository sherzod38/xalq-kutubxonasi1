import { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";

import Content from "./containers/Content";
import Footer from "./containers/Footer";

import Admin from "./admin/Admin";

import RegistrPeyj from "./pages/registration/RegistrPeyj";
import Ilmiy from "./pages/ilmiy/Ilmiy";
import Badiy from "./pages/badiy/Badiy";
import Darslik from "./pages/darslik/Darslik";
import * as AuthContext from "./context/Auth";

import "./assets/styles/main.scss";

const Religion = lazy(() => import("./pages/Religion"));

function App() {
  return (
    <div className="App">
      <AuthContext.Provider>
      <Router>
        <Header />

        <Content>
          <Switch>
            <Route path="/" exact>
              <Badiy />
            </Route>
            <Route path="/religion" exact>
              <Religion />
            </Route>
            <Route path="/darslik" exact>
              <Darslik />
            </Route>
            <Route path="/ilmiy" exact>
              <Ilmiy />
            </Route>
            <Route path="/admin" exact>
              <Admin />
            </Route>
            <Route path="/auth">
              <RegistrPeyj />
            </Route>
          </Switch>
        </Content>
        <Footer />
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
