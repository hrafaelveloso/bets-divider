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

const EntriesCombiner = ({ totalBets, combineBets, rightGames, onChangeRight }) => {
  const classes = useStyles();
  const disabledNoBets = useMemo(() => totalBets <= 1, [totalBets]);
  const [helperBets, setHelperBets] = useState('');
  const [errorBets, setErrorBets] = useState(false);

  const buttonSubmitDisabled = disabledNoBets || errorBets || rightGames.length === 0;

  useEffect(() => {
    if (parseInt(rightGames, 10) >= totalBets) {
      setHelperBets("O número de prognósticos 'certos' não é inferior ao número total de prognósticos.");
      setErrorBets(true);
    } else {
      setErrorBets(false);
      setHelperBets('');
    }

    if (totalBets - parseInt(rightGames, 10) > 4) {
      setHelperBets('O número de prognósticos a desdobrar não pode ser superior a 4.');
      setErrorBets(true);
    }
  }, [rightGames, totalBets]);

  return (
    <Grid item xs={12} md={4}>
      <Grid container>
        <Grid item xs={12} sm={6} md={12}>
          <TextField
            label="Número de prognósticos 'certos'"
            fullWidth
            value={rightGames}
            onChange={onChangeRight}
            type="number"
            className={classes.numberBets}
            disabled={disabledNoBets}
            helperText={disabledNoBets ? (totalBets === 0 ? 'Nenhum prognóstico inserido' : 'Insira mais do que 1 prognóstico') : helperBets}
            error={errorBets}
          />
        </Grid>
        <Grid item xs={12} sm={6} md="auto" className={classes.itemButton}>
          <Button variant="contained" color="primary" disabled={buttonSubmitDisabled} onClick={combineBets}>
            Desdobrar prognósticos
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(EntriesCombiner);
