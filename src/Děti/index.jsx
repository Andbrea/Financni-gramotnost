import React from "react";
import FirstPage from "./Pages/FirstPage";
import "./style.css";
import SecPage from "./Pages/SecPage";
import ThirdPage from "./Pages/ThirdPage";
import { FourPage } from "./Pages/FourPage";
import { QuizSec } from "./Pages/FourPage/QuizSec";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";
import Page from "../Teens/Page/index";
import Pexeso from "./Pages/FirstPage/Pexeso";

const Děti = () => {
  return (
    <>
      <div className="kids-container">
        <Switch>
          <Route exact path="/deti">
            <Redirect to="/deti/minceabankovky" />
          </Route>
          <Route path="/deti/minceabankovky">
            <FirstPage />
          </Route>
          <Route path="/deti/pexeso">
            <Pexeso />
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
          <Route path="/deti/pokracovat">
            <QuizSec />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Děti;
