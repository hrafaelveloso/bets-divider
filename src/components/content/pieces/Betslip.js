import React from 'react';
import { Grid, Paper, Typography, Divider, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Game from './Game';

const useStyles = makeStyles(theme => ({
  divider: {
    marginBottom: '5px',
  },
}));

const Betslip = ({ name, games }) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} md={4} ml={3}>
      <Paper elevation={3}>
        <Typography variant="h6">{name}</Typography>
        <Divider className={classes.divider} />
        {games.map((game, idxG) => (
          <Game key={idxG} idx={idxG} game={game} />
        ))}
      </Paper>
    </Grid>
  );
};

Betslip.propTypes = {
  name: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired,
};

export default React.memo(Betslip);
