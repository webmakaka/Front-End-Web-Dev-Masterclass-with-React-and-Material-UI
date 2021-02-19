import { Card, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pricingCard: {
    padding: 50,
    margin: 40,
    borderColor: 'darkorange',
  },
}));

export function PricingOption({ title, price, length, description }) {
  const { pricingCard } = useStyles();

  return (
    <Card className={pricingCard} variant="outlined">
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h4">${price}</Typography>
      <Typography variant="h7">/{length}</Typography>
      <Typography variant="h6">{description}</Typography>
    </Card>
  );
}
