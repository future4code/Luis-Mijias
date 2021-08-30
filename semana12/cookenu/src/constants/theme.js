import { createTheme } from '@material-ui/core/styles'

import { neutralColor, primaryColor, secondaryColor } from './colors'

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    secondary: {
      main: secondaryColor,
      contrastText: "black"
    },
     text:{
         primary: neutralColor
     }
  }
})

export default theme