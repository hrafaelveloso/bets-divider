import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Footer from './components/layout/Footer';
import Content from './components/content/Content';
import theme from './utils/theme';
import ReactGA from 'react-ga';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const trackingId = 'UA-149127176-1';
ReactGA.initialize(trackingId);

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
