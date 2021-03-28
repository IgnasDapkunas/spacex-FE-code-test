import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LaunchPage from "./Pages/LaunchPage";
import HomePage from "./Pages/HomePage";
import { connect } from "react-redux";

function Navigation({ pageId }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={`/launchpage:${pageId}`}>
          <LaunchPage />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (store) => {
  return { pageId: store.flightKey };
};

export default connect(mapStateToProps)(Navigation);
