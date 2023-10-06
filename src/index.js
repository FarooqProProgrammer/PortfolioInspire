import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from 'react-scroll-to-top';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorProvider } from './Hooks/useTheme';
import 'react-lazy-load-image-component/src/effects/blur.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorProvider>
    <ChakraProvider>
      <App />
      <ScrollToTop className='flex justify-center items-center' smooth />
    </ChakraProvider>
  </ColorProvider>

);

