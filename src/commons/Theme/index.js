import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  color: {
    primary: purple[500],
    secondary: green[500],
    error: red[500]
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14
  },
  shape: {
    borderRadius: 3,
    background: purple[500],
    color: 'white',
  }
});

export default theme;