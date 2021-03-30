import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import useStyles from "../material-ui/HomePage-style";

function FavouritesPage({ favourites }) {
  const classes = useStyles();
  return (
    <>
      <h1>Your Favourites 💖</h1>
      <Button
        size="large"
        component={Link}
        to="/"
        className={classes.buttonFavourite}
        variant="outlined"
        color="primary"
      >
        Go Back
      </Button>
      {favourites.length === 0 ? (
        <h3>Uh oh... Seems like you haven't added anything to your favourites yet!</h3>
      ) : (
        <Grid className={classes.grid} container spacing={3}>
          {favourites.map((launch) => {
            const { mission_name, launch_year, flight_number } = launch;
            return (
              <Grid item xs={6} sm={4} md={3} key={flight_number}>
                <div className={classes.root}>
                  <Button
                    size="medium"
                    component={Link}
                    to={`/favouritespage/launchpage/${flight_number}`}
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
  return { loading: store.loading, favourites: store.favourites };
};

export default connect(mapStateToProps)(FavouritesPage);
