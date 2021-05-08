import { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";

import Content from "./containers/Content";
import Footer from "./containers/Footer";

import Admin from "./admin/Admin";


import Ilmiy from "./pages/ilmiy/Ilmiy";
import Badiy from "./pages/badiy/Badiy";
import Darslik from "./pages/darslik/Darslik";
import Leyout from "./leyout";
import * as AuthContext from "./context/Auth";
import BookPages from "./pages/bookPages/BookPages";
import Leyout2 from "./leyout2";

import "./assets/styles/main.scss";

const Religion = lazy(() => import("./pages/Religion"));

function App() {
  return (
    <div className="App">
      <AuthContext.Provider>
        <Router>
          <Switch>
            <Route path="/auth">
              <Leyout />
            </Route>
            <Route path="/leyout2">
              <Leyout2 />
            </Route>
            <Route>
              <div className="main-layout">
                <Header />
                <Content>
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
                  <Route path="/book-info">
                    <BookPages />
                  </Route>
                </Content>
                <Footer />
              </div>
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
