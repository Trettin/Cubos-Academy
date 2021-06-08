import useStyles from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useContextStates from "../../hooks/useContextStates";
import CustomAlert from "../CustomAlert";

export default function PokeSearch() {
  const classes = useStyles();
  const { handleFindPokemon, open, inputValue, setInputValue } =
    useContextStates();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleFindPokemon(e, inputValue)}
    >
      <TextField
        id="outlined-basic"
        label="Search new pokemon"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" color="secondary" type="submit">
        SEARCH
      </Button>
      {open && <CustomAlert />}
    </form>
  );
}
