import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import useStyles from "./MaterialUI-Styles/FavouriteButton-style";

export default function FavouriteButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton color="secondary" size="large" onClick={() => console.log("works")}>
        <FavoriteBorderIcon />
      </IconButton>
    </div>
  );
}
