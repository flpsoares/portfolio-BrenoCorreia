import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { DatesContextProvider } from './contexts/DatesContext'

import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <DatesContextProvider>
      <GlobalStyle />
      <App />
    </DatesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
