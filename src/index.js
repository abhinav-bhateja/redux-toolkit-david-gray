import React from "react";
import { createRoot } from 'react-dom/client';

import { ColorModeScript, extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'

import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';

const theme = extendTheme({
  styles: {
    global: () => ({
      'html, body': {
        minH: '100vh'
      },
      '#root': {
        minH: '100vh'
      }
    }),
  },
})

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </Provider>
);
