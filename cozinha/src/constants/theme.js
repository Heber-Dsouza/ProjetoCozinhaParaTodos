import { createTheme } from '@mui/material/styles';

import { primaryColor, neutralColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
      primaryColor: neutralColor
    }
  }
});

export default theme