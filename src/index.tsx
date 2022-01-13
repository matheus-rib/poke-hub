import { ChakraProvider } from '@chakra-ui/react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import Routes from './routes'
import theme from './utils/theme'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
