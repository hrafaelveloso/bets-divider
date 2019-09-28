import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bgRed: {
    backgroundColor: '#A8A8A8',
  },
  container: {
    // minHeight: 'calc(100vh - 40px)',
    minHeight: '100vh',
  },
  header: {
    [theme.breakpoints.down('lg')]: {
      marginTop: '30px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '15px',
    },
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item xs={11} md={10} lg={9} className={classes.bgRed}>
        <Typography variant="h5" align="center" className={classes.header}>
          Divisor de prognósticos
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Content;
