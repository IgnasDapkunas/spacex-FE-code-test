import { makeStyles } from "@material-ui/core/styles";

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
  buttonFavourite: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    width: "20%",
    textAlign: "center",
    padding: 10,
  },
}));

export default useStyles;
