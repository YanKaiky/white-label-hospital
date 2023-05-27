import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#F3A378',
      contrastText: '#fff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#fff',
    },
    background: {
      paper: '#FDC3AC',
      default: '#FDC3AC',
    },
  },
  typography: {
    allVariants: {
      color: '#1E1A15',
      fontFamily: 'Roboto'
    }
  }
});
