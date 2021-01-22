import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(3),
    },

    formControl: {
      margin: theme.spacing(3),
      width:220
    },
  }));

export default useStyles  