import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/SocialNetworks';
import { ContextProvider } from './context/index';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
)
