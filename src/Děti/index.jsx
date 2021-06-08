import React from "react";
import FirstPage from "./Pages/FirstPage";
import "./style.css";
import SecPage from "./Pages/SecPage";
import ThirdPage from "./Pages/ThirdPage";
import { FourPage } from "./Pages/FourPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";
import Page from "../Teens/Page/index";

const Děti = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/deti">
            <Redirect to="/deti/minceabankovky" />
          </Route>
          <Route path="/deti/minceabankovky">
            <Page title="Mince a bankovky" />
            <FirstPage />
          </Route>
          <Route path="/deti/kcemuslouzipenize">
            <SecPage />
          </Route>
          <Route path="/deti/platebnikarta">
            <ThirdPage />
          </Route>
          <Route path="/deti/kviz">
            <FourPage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Děti;
