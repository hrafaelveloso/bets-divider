import React, { useMemo, useState, useEffect } from 'react';
import { Grid, TextField, Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

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
  buttonSecondary: {
    backgroundColor: '#169429',
    '&:hover': {
      backgroundColor: '#1a6125',
    },
  },
}));

const getBoletins = val => {
  switch (val.toString()) {
    case '1':
      return 2;
    case '2':
      return 4;
    case '3':
      return 8;
    case '4':
      return 16;
    default:
      return 2;
  }
};

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

    const diference = totalBets - parseInt(rightGames, 10);
    if (diference > 4) {
      setHelperBets(
        `O número de prognósticos a desdobrar não pode ser superior a 4. Prognósticos - ${totalBets}, Jogos 'certos' - ${rightGames}, Jogos a desdobrar - ${diference}.`
      );
      setErrorBets(true);
    } else if (parseInt(rightGames, 10) > 1 && parseInt(rightGames, 10) < totalBets) {
      setHelperBets(`Serão gerados ${getBoletins(diference)} boletins após desdobrar os últimos ${diference} prognósticos.`);
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
            step="1"
            min="1"
            className={classes.numberBets}
            disabled={disabledNoBets}
            helperText={disabledNoBets ? (totalBets === 0 ? 'Nenhum prognóstico inserido' : 'Insira mais do que 1 prognóstico') : helperBets}
            error={errorBets}
          />
        </Grid>
        <Grid item xs={12} sm={6} md="auto" className={classes.itemButton}>
          <Button variant="contained" color="primary" disabled={buttonSubmitDisabled} onClick={combineBets} className={classes.buttonSecondary}>
            Desdobrar prognósticos
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

EntriesCombiner.propTypes = {
  totalBets: PropTypes.string.isRequired,
  combineBets: PropTypes.func.isRequired,
  rightGames: PropTypes.number.isRequired,
  onChangeRight: PropTypes.func.isRequired,
};

export default React.memo(EntriesCombiner);
