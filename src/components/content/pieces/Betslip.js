import React from 'react';
import { Grid, Paper, Typography, Divider, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Game from './Game';

const useStyles = makeStyles(() => ({
  divider: {
    marginBottom: '5px',
  },
  dividerBottom: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  paper: {
    padding: '20px 20px 10px 20px',
  },
}));

const Betslip = ({ name, games, odd, rightGames, menu }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3} lg={4}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6">{name}</Typography>
        <Divider className={classes.divider} />
        {games.map((game, idxG) => (
          <Game key={idxG} idx={idxG} rightGames={rightGames} menu={menu} game={game} />
        ))}
        <Divider className={classes.dividerBottom} />
        {odd > 1 && <Typography variant="subtitle2">Odd: {parseFloat(odd).toFixed(2)}</Typography>}
      </Paper>
    </Grid>
  );
};

Betslip.defaultProps = {
  odd: 1,
  rightGames: 0,
};

Betslip.propTypes = {
  name: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired,
  menu: PropTypes.string.isRequired,
  odd: PropTypes.number,
  rightGames: PropTypes.number,
};

export default React.memo(Betslip);
