import React from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  boxFooter: {
    display: 'flex',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8D8D8',
    padding: '0px 20px',
    marginTop: 'auto',
  },
  anchor: {
    textDecoration: 'none!important',
    color: 'inherit',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.boxFooter}>
      <Typography variant="body2">
        Desenvolvido por{' '}
        <a href="mailto:rafaelcostaveloso@gmail.com" className={classes.anchor}>
          Rafael Veloso
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
