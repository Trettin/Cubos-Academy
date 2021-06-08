import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      margin: "0.5rem 0",
      display: "flex",
      flexDirection: "column",
    },
  },
}));
