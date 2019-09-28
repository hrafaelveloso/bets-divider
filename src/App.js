import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
// import Footer from './components/layout/Footer';
import Content from './components/content/Content';
import theme from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Content />
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default App;
