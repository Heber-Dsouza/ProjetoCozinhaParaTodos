import React from 'react'
import { ThemeProvider } from '@mui/material/styles'

import theme from './constants/theme'
import Router from './routes/Router'
import GlobalState from './global/GlobalState'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  )
}

export default App