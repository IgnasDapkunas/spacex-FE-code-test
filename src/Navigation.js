import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LaunchPage from "./pages/LaunchPage";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import FavouriteLaunchPage from "./pages/FavouriteLaunchPage";
import { connect } from "react-redux";

function Navigation({ data, favourites }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {data.map((launch) => {
          return (
            <Route exact path={`/launchpage/${launch.flight_number}`}>
              <LaunchPage key={launch.flight_number} {...launch} />
            </Route>
          );
        })}
        <Route exact path="/favouritespage">
          <FavouritesPage />
        </Route>
        {favourites.map((launch) => {
          return (
            <Route exact path={`/favouritespage/launchpage/${launch.flight_number}`}>
              <FavouriteLaunchPage key={launch.flight_number} {...launch} />
            </Route>
          );
        })}
        <Route path="/favouritespage">
          <Redirect to="/favouritespage" />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (store) => {
  return { data: store.data, favourites: store.favourites };
};

export default connect(mapStateToProps)(Navigation);
