import useStyles from "./style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function PokeSearch() {
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/Bulbasaur`);
    const pokemon = await response.json();
  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e)}
    >
      <TextField
        id="outlined-basic"
        label="Search new pokemon"
        variant="outlined"
      />
      <Button variant="contained" color="primary" type="submit">
        SEARCH
      </Button>
    </form>
  );
}
