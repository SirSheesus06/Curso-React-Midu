import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'

export const root = createRoot(document.getElementById('app'))
root.render(
  <App />
)
