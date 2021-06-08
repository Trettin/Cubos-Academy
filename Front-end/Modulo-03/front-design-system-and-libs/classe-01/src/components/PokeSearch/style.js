import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      marginTop: "0.75rem",
      marginBottom: "0.75rem",
      marginRight: 0,
      marginLeft: 0,
      display: "flex",
      flexDirection: "column",
    },
  },
}));
