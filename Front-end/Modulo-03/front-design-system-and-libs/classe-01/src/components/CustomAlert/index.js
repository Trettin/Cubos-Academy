import Alert from "@material-ui/lab/Alert";
import useStyles from "./style";

export default function SimpleAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">Pokemon not found!</Alert>
    </div>
  );
}
