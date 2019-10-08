import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  evenGame: {
    color: theme.palette.text.secondary,
  },
  rightGame: {
    color: theme.palette.text.secondary,
  },
  combineGame: {
    fontSize: '15px',
    color: '#000',
    marginTop: '2px'
  },
}));

const Game = ({ idx, game, rightGames, menu }) => { 
  const classes = useStyles();

  return (
    <Typography variant="subtitle2" className={clsx({ 
      [classes.evenGame]: idx % 2 !== 0 && menu === 'divisor', 
      [classes.rightGame] : menu !== 'divisor' && idx < rightGames, 
      [classes.combineGame] : menu !== 'divisor' && idx >= rightGames 
      })}>
      {game}
    </Typography>
  );
};

Game.defaultProps = {
  rightGames : 0,
menu : 'divisor'
}

Game.propTypes = {
  idx: PropTypes.number.isRequired,
  game: PropTypes.string.isRequired,
  rightGames : PropTypes.number,
  menu : PropTypes.string,
};

export default React.memo(Game);
