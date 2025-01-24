import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import App from './App.tsx'
import MetaTags from './MetaTags';
import DisableRightClick from './components/DisableRightClick.tsx';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <MetaTags />
    <DisableRightClick />
    <App />
  </HelmetProvider>,
)
