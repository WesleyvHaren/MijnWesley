import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { bgColors } from "../data/css-in-js-helpers";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160
  },
  sidebar: {
    height: "100%",
    backgroundColor: bgColors.White,
    border: "1px solid #DDD"
  },
  content: {
    height: "100%",
    backgroundColor: bgColors.White,
    border: "1px solid #DDD"
  }
});

export default function Index() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={2}>
          <div className={classes.sidebar}>
            <Avatar
              alt="Wesley van Haren"
              src="/static/headshot.jpg"
              className={classes.bigAvatar}
            />
            <p>Web developer in hart en nieren.</p>
          </div>
        </Grid>
        <Grid item xs={10} className={classes.content}>
          <h2>Welkom</h2>
          <p>Introtekst</p>
        </Grid>
      </Grid>
    </Layout>
  );
}
