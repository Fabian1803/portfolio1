import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import App from './App.tsx'
import MetaTags from './MetaTags';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <MetaTags />
    <App />
  </HelmetProvider>,
)
