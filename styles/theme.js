import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      // main: '#f44336',
      main: 'rgba(255,255,255,.87)'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#415a77',
    },
    font: {
      default: '#D3D3D3'
    },
  },
  // colours: {
  //   main: '#2a2b36',
  //   darkgrey: 'rgba(255,255,255,.075)',
  //   lightgrey: 'rgba(255,255,255,.87)'
  // }
});

export default theme; 