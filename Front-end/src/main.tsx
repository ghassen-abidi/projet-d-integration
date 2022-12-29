import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider, Text } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
