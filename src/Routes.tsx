import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteComponentProps
} from "react-router-dom";
import Header from "./component/Header";
import RecycleBag from "./modules/RecycleBag";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import YourCartPage from "./modules/YourCartPage";

const RoutesWrap: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route component={Routes} />
    </Router>
  );
};

function Routes(props: RouteComponentProps) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={props.location.key}
        timeout={{ enter: 1000, exit: 300 }}
        classNames={'fade'}
        exit={false}
      >
        <Switch>
          <Redirect exact={true} from="/" to="/home" />
          <Route exact={true} path="/home" component={RecycleBag} />
          <Route path="/cart" component={YourCartPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RoutesWrap;
