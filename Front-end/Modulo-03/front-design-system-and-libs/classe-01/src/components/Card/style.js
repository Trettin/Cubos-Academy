import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: 300,
    height: "auto",
  },
  media: {
    height: "auto",
    paddingTop: "100%", // 16:9
  },
  content: {
    textAlign: "left",
  },
}));
