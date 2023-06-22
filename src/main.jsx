import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VotacionProvider } from './store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VotacionProvider>
      <App />
    </VotacionProvider>
  </React.StrictMode>
)
