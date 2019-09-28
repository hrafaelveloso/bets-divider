import React from 'react';
import { Grid, Paper, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const Prognosticos = ({ value, onChange }) => {
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
          helperText="Inserir 1 prognóstico por linha"
        />
      </Paper>
    </Grid>
  );
};

Prognosticos.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Prognosticos;
