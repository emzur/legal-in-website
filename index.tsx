import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts'; // Import i18n configuration

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Ładowanie..."> {/* Fallback na czas ładowania tłumaczeń */}
      <App />
    </React.Suspense>
  </React.StrictMode>
);