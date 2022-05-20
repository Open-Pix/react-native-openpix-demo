import 'react-native-get-random-values'
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components'
import { ToastProvider } from 'react-native-styled-toast'
import 'core-js/stable';
import OpenPixDemo from './src/OpenPixDemo';

// Toast Theme
const theme = {
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
  colors: {
    text: '#0A0A0A',
    background: '#FFF',
    border: '#E2E8F0',
    muted: '#F0F1F3',
    success: '#7DBE31',
    error: '#FC0021',
    info: '#00FFFF'
  }
};

const App = () => {
  return (
    <PaperProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <OpenPixDemo />
        </ToastProvider>
      </ThemeProvider>
    </PaperProvider>
  );
}

export default App;
