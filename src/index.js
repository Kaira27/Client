import React from 'react';
import { createRoot } from 'react-dom/client';
import ProtectedRoutes from './routes/ProtectedRoutes';
import './index.css';
import { Nav } from './constants';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Nav />
    <ProtectedRoutes />
  </React.StrictMode>
);