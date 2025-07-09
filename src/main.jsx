import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Testare Snack1
// import App from './hooks/useSwitch/App'

// Testare Snack2
// import App from './hooks/useDate/App';

// Testare SNack3 
import App from './hooks/useCustomPointer/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
