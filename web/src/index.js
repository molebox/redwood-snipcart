import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

import Routes from 'src/Routes'

import './index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>
  </ThemeProvider>,
  document.getElementById('redwood-app')
)
