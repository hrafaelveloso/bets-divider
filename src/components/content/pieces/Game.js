import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  evenGame: {
    color: theme.palette.text.secondary,
  },
}));

const Game = ({ idx, game }) => {
  const classes = useStyles();

  return (
    <Typography variant="subtitle2" className={clsx({ [classes.evenGame]: idx % 2 !== 0 })}>
      {game}
    </Typography>
  );
};

Game.propTypes = {
  idx: PropTypes.number.isRequired,
  game: PropTypes.string.isRequired,
};

export default React.memo(Game);
