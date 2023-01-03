import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AdmPortfolioApp } from './AdmPortfolioApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdmPortfolioApp />
    </BrowserRouter>
  </React.StrictMode>,
)
