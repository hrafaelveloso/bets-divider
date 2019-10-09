import React, { useCallback } from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  buttonBack: {
    marginRight: '20px',
  },
  itemRepeat: {
    display: 'flex',
    marginTop: '30px',
  },
}));

const BackOrRepeat = ({ setBetSlips, setBetsByEntry, divideBets, menu }) => {
  const classes = useStyles();

  const freshStart = useCallback(
    e => {
      e.preventDefault();

      setBetSlips([]);
      setBetsByEntry('');
    },
    [setBetSlips, setBetsByEntry]
  );

  return (
    <Grid item xs={12} className={classes.itemRepeat}>
      <Button variant="outlined" color="primary" onClick={freshStart} className={classes.buttonBack}>
        Voltar ao menu anterior
      </Button>
      {menu === 'divisor' && (
        <Button variant="contained" color="primary" onClick={divideBets}>
          Repetir divisão
        </Button>
      )}
    </Grid>
  );
};

BackOrRepeat.propTypes = {
  setBetSlips: PropTypes.func.isRequired,
  setBetsByEntry: PropTypes.func.isRequired,
  divideBets: PropTypes.func.isRequired,
  menu: PropTypes.string.isRequired,
};

export default React.memo(BackOrRepeat);
