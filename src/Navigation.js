import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LaunchPage from "./pages/Launch";
import LaunchesPage from "./pages/Launches";
import FavouritesPage from "./pages/Favourites";
import FavouriteLaunchPage from "./pages/Favourite";

function Navigation({ data, favourites }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LaunchesPage />
        </Route>
        {data.map((launch) => {
          return (
            <Route exact path={`/launchpage/${launch.flight_number}`}>
              <LaunchPage key={`launchpage_${launch.flight_number}`} {...launch} />
            </Route>
          );
        })}
        <Route exact path="/favouritespage">
          <FavouritesPage />
        </Route>
        {favourites.map((launch) => {
          return (
            <Route exact path={`/favouritespage/launchpage/${launch.flight_number}`}>
              <FavouriteLaunchPage
                key={`favouritespage_launchpage_${launch.flight_number}`}
                {...launch}
              />
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
