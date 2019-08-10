import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160
  }
});

export default function Index() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={3}>
          <Avatar
            alt="Wesley van Haren"
            src="/static/headshot.jpg"
            className={classes.bigAvatar}
          />
        </Grid>
        <Grid item xs={9}>
          <h2>Welkom</h2>
          <p>Introtekst</p>
        </Grid>
      </Grid>
    </Layout>
  );
}
