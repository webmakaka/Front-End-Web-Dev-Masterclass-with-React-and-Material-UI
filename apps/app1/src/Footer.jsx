import { Container, Link, makeStyles, Typography } from '@material-ui/core';

function Copyright() {
  return (
    <Typography>
      {'Copyright '}
      <Link href="#">Courses</Link>
      {' ' + new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
  },
}));

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variatn="h6">Mammoth Interactive</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Anyone can learn to code
        </Typography>

        <Copyright />
      </Container>
    </footer>
  );
}
