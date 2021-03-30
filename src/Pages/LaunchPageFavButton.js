import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import useStyles from "../material-ui/FavouriteButton-style";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";

export default function FavouriteButton({ favouriteAdd, favouriteRemove, favourited }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {favourited ? (
        <Tooltip title="Unfavourite" placement="right">
          <IconButton onClick={() => favouriteRemove()}>
            <FavoriteIcon color="secondary" style={{ fontSize: 35 }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Favourite" placement="right">
          <IconButton onClick={() => favouriteAdd()}>
            <FavoriteBorderIcon color="secondary" style={{ fontSize: 35 }} />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
}
