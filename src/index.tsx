import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { DatesContextProvider } from './contexts/DatesContext'
import { ModalContextProvider } from './contexts/ModalContext'

import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <DatesContextProvider>
      <ModalContextProvider>
        <GlobalStyle />
        <App />
      </ModalContextProvider>
    </DatesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
