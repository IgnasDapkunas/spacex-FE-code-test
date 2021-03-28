import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Loading from "./LoadingPage";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import useStyles from "../MaterialUI-Styles/HomePage-style";

function HomePage({ data, loading, dispatch }) {
  const classes = useStyles();
  return (
    <>
      <h1>Space-X Launches</h1>
      {loading ? (
        <Loading />
      ) : (
        <Grid className={classes.grid} container spacing={3}>
          {data.map((launch) => {
            const { mission_name, launch_year, flight_number } = launch;
            return (
              <Grid item xs={6} sm={4} md={3} key={flight_number}>
                <div className={classes.root}>
                  <Button
                    size="medium"
                    component={Link}
                    to={`/launchpage:${flight_number}`}
                    onClick={() => {
                      dispatch({ type: "FLIGHT_KEY", flightKey: flight_number - 1 });
                      localStorage.setItem("flightKey", `${flight_number - 1}`);
                    }}
                    className={classes.buttonHome}
                    variant="outlined"
                    color="primary"
                  >
                    <h2>{mission_name}</h2>
                    <div className={"year"}>{launch_year}</div>
                  </Button>
                </div>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

const mapStateToProps = (store) => {
  return { loading: store.loading, data: store.data, flightKey: store.flightKey };
};

export default connect(mapStateToProps)(HomePage);
