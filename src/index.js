import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from './utils/loading/Loading.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { UserContextProvider } from './components/authContext/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Loading height={100} />}>
        <HelmetProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </HelmetProvider>
      </Suspense>
    </Router>
  </React.StrictMode >
);
reportWebVitals();
