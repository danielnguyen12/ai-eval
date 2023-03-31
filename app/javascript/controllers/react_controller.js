import { Controller } from '@hotwired/stimulus';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';
import { ChakraProvider } from '@chakra-ui/react';

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    ReactDOM.createRoot(document.getElementById('app')).render(
      <React.StrictMode>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    );
  }
}
