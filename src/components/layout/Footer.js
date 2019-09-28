import React from 'react';
import { Typography, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  boxFooter: {
    display: 'flex',
    height: '40px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#D8D8D8',
    padding: '0px 20px',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.boxFooter}>
      <Typography variant="body2">Desenvolvido por Rafael Veloso</Typography>
    </Box>
  );
};

export default Footer;
