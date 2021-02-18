import { Container, Icon, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: 50,
  },
}));

export function GridItem({ title, description, icon }) {
  const { gridItem } = useStyles();

  return (
    <Container align="left" className={gridItem}>
      <Icon>{icon}</Icon>

      <Typography variant="h5">{title}</Typography>

      <Typography>{description}</Typography>
    </Container>
  );
}
