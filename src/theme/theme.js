import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#3C6309',
    },
    secondary: {
      main: '#316BAE',
    },
    error: {
      main: red.A400,
    },
  },
});

