import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#015488',
      contrastText: '#fff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#fff',
    },
    background: {
      paper: '#f7f6f3',
      default: '#fff',
    },
  },
  typography: {
    allVariants: {
      color: '#015488',
      fontFamily: 'Roboto'
    }
  }
});
