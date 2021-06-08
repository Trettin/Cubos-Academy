import useStyles from "./style";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useContextStates from "../../hooks/useContextStates";

export default function RecipeReviewCard() {
  const classes = useStyles();
  const { pokemon } = useContextStates();

  return (
    <Card className={classes.root}>
      <CardHeader title={pokemon.name} />
      <CardMedia
        className={classes.media}
        image={pokemon.image}
        title="Pokemon image"
      />
      <CardContent className={classes.content}>
        <Typography>Abilities:</Typography>

        {pokemon.abilities?.map((ability) => {
          return (
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              key={ability.ability.name}
            >
              {ability.ability.name ?? ""}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
}
