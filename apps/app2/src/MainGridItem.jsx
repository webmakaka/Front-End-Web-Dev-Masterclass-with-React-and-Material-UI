import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 300,
  },
  mainItem: {
    padding: theme.spacing(8),
    textAlign: 'left',
  },
  mainContainer: {
    paddingTop: 120,
    paddingBottom: 120,
    backgroundColor: 'darkorange',
  },
  imageCard: {
    margin: 40,
  },
}));

export function MainGridItem() {
  const { cardMedia, mainItem, mainContainer, imageCard } = useStyles();

  return (
    <Container className={mainContainer}>
      <Card>
        <Grid container>
          <Grid item md={6} className={mainItem}>
            <Typography variant="h2">Unlimited Subscription</Typography>
            <Typography>2,000 hours of online courses</Typography>
            <Button color="primary" variant="contained">
              Sign Up
            </Button>
          </Grid>
          <Grid item md={6}>
            <Card className={imageCard}>
              <CardMedia
                className={cardMedia}
                image="https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg"
              />
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
