import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this line
import { StoreProvider } from 'easy-peasy';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App/>} /> {/* We will respond to the root route for our application We will use "/*" because it will match anything that goes beyond the length of this inital route  and it also lets us know that we are going to put more routes nested inside of this route */}
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);

