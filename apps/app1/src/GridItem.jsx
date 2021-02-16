import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  cardImage: {
    height: 300,
  },
}));

export function GridItem({ title, image, description }) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title={title} subheader="Recommended for you" />
      <CardMedia
        className={classes.cardImage}
        image={image}
        title="Excel Masterclass"
      />
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Visit page">
          <ArrowForward />
        </IconButton>
      </CardActions>
    </Card>
  );
}
