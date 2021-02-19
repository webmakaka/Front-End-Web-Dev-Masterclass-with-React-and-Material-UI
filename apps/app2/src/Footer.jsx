import {
  Button,
  Card,
  Grid,
  Icon,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { Facebook, Twitter, YouTube } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  messageForm: {
    margin: 50,
    width: '80%',
  },
  messageButton: {
    width: '100%',
  },
  companyInformation: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  footer: {
    padding: theme.spacing(6),
    backgroundColor: '#282828',
    color: 'white',
  },
}));

export function Footer() {
  const {
    messageForm,
    messageButton,
    companyInformation,
    footer,
  } = useStyles();

  return (
    <footer className={footer}>
      <Grid container>
        <Grid item lg={6} md={12}>
          <Card>
            <form>
              <TextField label="Get in touch" className={messageForm} />
            </form>
          </Card>
          <Button variant="contained" color="primary" className={messageButton}>
            Send Message
          </Button>
        </Grid>
        <Grid item lg={6} md={12} className={companyInformation}>
          <Typography variant="h5">Mammoth Interactive</Typography>
          <Typography>
            Building award-winning, affordable online courses since 2009.
          </Typography>
          <Grid item>
            <Icon>
              <YouTube />
            </Icon>
            <Icon>
              <Facebook />
            </Icon>
            <Icon>
              <Twitter />
            </Icon>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
