import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Your Tailwind/Styles

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store.js'; // <-- IMPORTANT: Import both store and persistor!
import { PersistGate } from 'redux-persist/integration/react'; // <-- IMPORTANT: Import PersistGate

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* The PersistGate delays the rendering of your app's UI until your persisted 
        state has been retrieved and saved to the Redux store.
      */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);