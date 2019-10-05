import React from 'react';
import { Grid, Paper, TextField, makeStyles } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  iconInfo: {
    position: 'absolute',
    marginTop: '-30px',
    width: 30,
    height: 30,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.dark,
    },
  },
}));

const Prognosticos = ({ value, totalBets, onChange, toggleModal }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8} lg={7}>
      <Paper elevation={3}>
        <TextField
          label="Prognósticos"
          variant="outlined"
          fullWidth
          value={value}
          onChange={onChange}
          multiline
          rows={5}
          rowsMax={50}
          helperText={
            totalBets === 0
              ? 'Inserir 1 prognóstico por linha.'
              : `${totalBets} prognóstico${totalBets > 1 ? 's' : ''} inserido${
                  totalBets > 1 ? 's' : ''
                }.`
          }
        />
        <Info color="primary" className={classes.iconInfo} onClick={toggleModal} />
      </Paper>
    </Grid>
  );
};

Prognosticos.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  totalBets: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Prognosticos;
