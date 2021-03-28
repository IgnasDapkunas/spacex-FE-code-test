import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { connect } from "react-redux";
import useStyles from "../MaterialUI-Styles/LaunchPage-style";
import FavouriteButton from "../FavouriteButton";

function LaunchPage({ data }) {
  const classes = useStyles();
  const flightKey = parseInt(localStorage.getItem("flightKey"));

  return (
    <>
      {data.length === 0 ? (
        <></>
      ) : (
        <>
          <h1>
            {data[flightKey].mission_name}
            <FavouriteButton />
          </h1>

          <Typography variant="h5" component="h2" className={classes.success}>
            {data[flightKey].launch_success === false ? (
              <div className="unsuccessful">Launch was unsuccessful.</div>
            ) : (
              <div className="successful">Launch was successful.</div>
            )}
          </Typography>
          <img
            className="img-class"
            src={`${data[flightKey].links.mission_patch_small}`}
            alt="space-x mission patches"
          ></img>
          <Button
            size="large"
            component={Link}
            to="/"
            className={classes.buttonLaunch}
            variant="outlined"
            color="secondary"
          >
            Go Back
          </Button>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                <div>
                  {data[flightKey].launch_date_local} launched in{" "}
                  {data[flightKey].launch_site.site_name}
                </div>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                <div>
                  <b>Mission name: </b>
                  {data[flightKey].mission_name}
                </div>
              </Typography>
              <Typography variant="h5" component="h2">
                {data[flightKey].details === null ? (
                  <b>No details provided.</b>
                ) : (
                  <div>
                    <b>Launch details:</b> {data[flightKey].details}
                  </div>
                )}
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
}

const mapStateToProps = (store) => {
  return { data: store.data, flightKey: store.flightKey };
};

export default connect(mapStateToProps)(LaunchPage);
