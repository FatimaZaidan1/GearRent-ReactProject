import { createRoot } from 'react-dom/client'
// NOTE: We no longer import BrowserRouter because App.jsx uses createBrowserRouter/RouterProvider.
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // The App component already handles routing internally via RouterProvider, 
  // so we remove the outer <BrowserRouter> tag.
  <App />
)

