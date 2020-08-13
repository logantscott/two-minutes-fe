import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import AuthProvider from './Providers/AuthProvider';

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
