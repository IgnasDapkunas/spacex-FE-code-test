import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      textAlign: "center",
    },
  },
  pos: {
    marginBottom: 50,
  },
  buttonLaunch: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    width: "20%",
    textAlign: "center",
    padding: 10,
  },
  success: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    marginTop: -40,
    marginBottom: 30,
  },
}));

export default useStyles;
