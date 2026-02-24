import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { store } from '@/store';
import '@/utils/i18n/i18n';

import App from '@/App';
import { TooltipProvider } from '@/components/ui';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TooltipProvider>
          <App />
        </TooltipProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
