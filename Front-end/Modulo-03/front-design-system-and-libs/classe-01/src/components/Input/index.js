import useStyles from "./style";
import TextField from "@material-ui/core/TextField";

export default function () {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search new pokemon"
        variant="outlined"
      />
    </form>
  );
}
