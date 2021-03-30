import React from "react";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "../material-ui/FavouriteButton-style";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";

export default function FavouriteButton({ favouriteRemove }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tooltip title="Unfavourite" placement="right">
        <IconButton onClick={() => favouriteRemove()}>
          <FavoriteIcon color="secondary" style={{ fontSize: 35 }} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
