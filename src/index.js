import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM.render
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const rootElement = createRoot(root); // Create a root using createRoot

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
