import React, { useMemo, useState, useEffect } from 'react';
import { Grid, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  numberBets: {
    [theme.breakpoints.up('md')]: {
      marginBottom: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '20px',
    },
  },
  itemButton: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
}));

const EntriesAndAction = ({ betsByEntry, onChangeBets, totalBets, divideBets }) => {
  const classes = useStyles();
  const disabledNoBets = useMemo(() => totalBets <= 1, [totalBets]);
  const [helperBets, setHelperBets] = useState('');
  const [errorBets, setErrorBets] = useState(false);

  useEffect(() => {
    if (parseInt(betsByEntry, 10) >= totalBets) {
      setHelperBets(
        'O número de prognósticos por aposta não é inferior ao número total de prognósticos.'
      );
      setErrorBets(true);
    } else {
      setErrorBets(false);
      setHelperBets('');
    }

    if (parseInt(betsByEntry, 10) < totalBets && parseInt(betsByEntry, 10) > 1) {
      const numberOfBets = Math.floor(totalBets / parseInt(betsByEntry, 10));
      setHelperBets(
        `Serão geradas ${numberOfBets} apostas com ${parseInt(betsByEntry, 10)} prognósticos cada.`
      );
      setErrorBets(false);
    } else if (parseInt(betsByEntry, 10) === 1) {
      setHelperBets('O número de prognósticos por aposta tem de ser superior a 1.');
      setErrorBets(true);
    }
  }, [betsByEntry, totalBets]);

  return (
    <Grid item xs={12} md={4}>
      <Grid container>
        <Grid item xs={12} sm={6} md={12}>
          <TextField
            label="Prognósticos por aposta"
            fullWidth
            value={betsByEntry}
            onChange={onChangeBets}
            type="number"
            className={classes.numberBets}
            disabled={disabledNoBets}
            helperText={
              disabledNoBets
                ? totalBets === 0
                  ? 'Nenhum prognóstico inserido'
                  : 'Insira mais do que 1 prognóstico'
                : helperBets
            }
            error={errorBets}
          />
        </Grid>
        <Grid item xs={12} sm={6} md="auto" className={classes.itemButton}>
          <Button
            variant="contained"
            color="primary"
            disabled={disabledNoBets || errorBets || betsByEntry.length === 0}
            onClick={divideBets}
          >
            Dividir prognósticos
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(EntriesAndAction);
