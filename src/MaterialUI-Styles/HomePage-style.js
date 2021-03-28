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
}));

export default useStyles;
