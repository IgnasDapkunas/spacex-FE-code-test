import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import useStyles from "../material-ui/Launches-style";

function Launches({ data, loading }) {
  const classes = useStyles();
  return (
    <>
      <h1>Space-X Launches 🚀</h1>
      <Button
        size="large"
        component={Link}
        to="/favouritespage"
        className={classes.buttonFavourite}
        variant="contained"
        color="secondary"
      >
        my favourites
      </Button>
      {loading ? (
        <Loading />
      ) : (
        <Grid className={classes.grid} container spacing={3}>
          {data.map((launch) => {
            const { mission_name, launch_year, flight_number, favourited } = launch;
            return (
              <Grid item xs={6} sm={4} md={3} key={`homepage_${flight_number}`}>
                <div className={classes.root}>
                  <Button
                    size="medium"
                    component={Link}
                    to={`/launchpage/${flight_number}`}
                    className={classes.buttonHome}
                    variant="outlined"
                    color={favourited ? `secondary` : `primary`}
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
  return { loading: store.loading, data: store.data };
};

export default connect(mapStateToProps)(Launches);
