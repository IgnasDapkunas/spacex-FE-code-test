import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "../material-ui/Launch-style";
import LaunchFavButton from "../components/LaunchFavButton";

function LaunchPage({
  mission_name,
  launch_success,
  links,
  launch_date_local,
  launch_site,
  details,
  favouriteAdd,
  favouriteRemove,
  favourited,
}) {
  const classes = useStyles();
  return (
    <>
      <h1>
        {mission_name}
        <LaunchFavButton
          favouriteAdd={() => favouriteAdd()}
          favouriteRemove={() => favouriteRemove()}
          favourited={favourited}
        />
      </h1>
      <Typography variant="h5" component="h2" className={classes.success}>
        {launch_success === false ? (
          <div className="unsuccessful">Launch was unsuccessful.</div>
        ) : (
          <div className="successful">Launch was successful.</div>
        )}
      </Typography>
      <img
        className="img-class"
        src={`${links.mission_patch_small}`}
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
              {launch_date_local} launched in {launch_site.site_name}
            </div>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <div>
              <b>Mission name: </b>
              {mission_name}
            </div>
          </Typography>
          <Typography variant="h5" component="h2">
            {details === null ? (
              <b>No details provided.</b>
            ) : (
              <div>
                <b>Launch details:</b> {details}
              </div>
            )}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { flight_number } = ownProps;
  return {
    favouriteAdd: () =>
      dispatch({ type: "FAVOURITE_ADD", payload: { id: flight_number, favourited: true } }),
    favouriteRemove: () =>
      dispatch({ type: "FAVOURITE_REMOVE", payload: { id: flight_number, favourited: false } }),
  };
};

export default connect(null, mapDispatchToProps)(LaunchPage);
