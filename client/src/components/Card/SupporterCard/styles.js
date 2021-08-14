/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '80%',
    marginBottom: '15px',
    height: '156px',
    display: 'flex',
    alignItems: 'center',
  },
  cover: {
    width: 141,
    margin: '10px',
  },
  rootCard: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    width: '100%',
  },
}));
