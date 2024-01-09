import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App.jsx';
import theme from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
