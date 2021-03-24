import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LaunchPage from "./LaunchPage";
import HomePage from "./HomePage";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [flightKey, setFlightKey] = useState();
  const [data, setData] = useState([]);

  const baseUrl = "https://api.spacexdata.com/v2";
  const launchesData = async () => {
    const response = await fetch(`${baseUrl}/launches`);
    setData(await response.json());
    setLoading(false);
  };

  useEffect(() => {
    launchesData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage prop={{ loading, data }} onClick={(number) => setFlightKey(number)} />
        </Route>
        <Route path="/launchpage">
          <LaunchPage prop={{ data }} flightKey={flightKey} />
        </Route>
      </Switch>
    </Router>
  );
}
