import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      textAlign: "center",
    },
  },
  grid: {
    marginTop: 100,
  },
  buttonHome: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
}));

export default function HomePage({ prop, onClick }) {
  const classes = useStyles();
  const { loading, data } = prop;

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
                    to="/launchpage"
                    onClick={() => onClick(flight_number - 1)}
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
