import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import divider from '../../utils/divider';
import Prognosticos from './pieces/Prognosticos';
import EntriesAndAction from './pieces/EntriesAndAction';
import Betslip from './pieces/Betslip';
import BackOrRepeat from './pieces/BackOrRepeat';

const useStyles = makeStyles(theme => ({
  header: {
    [theme.breakpoints.down('xl')]: {
      marginTop: '50px',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '30px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '15px',
    },
  },
  marginContent: {
    [theme.breakpoints.down('xl')]: {
      marginTop: '70px',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '40px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '25px',
    },
  },
  minMargin: {
    marginBottom: '30px',
  },
}));

const Content = () => {
  const classes = useStyles();
  const [betsByEntry, setBetsByEntry] = useState('');
  const [totalBets, setTotalBets] = useState(0);
  const [bets, setBets] = useState('');
  const [betSlips, setBetSlips] = useState([]);

  useEffect(() => {
    setTotalBets(bets.split(/\r*\n/).filter(x => x !== '').length);
  }, [bets]);

  const divideBets = e => {
    e.preventDefault();

    const division = divider(betsByEntry, bets.split(/\r*\n/).filter(x => x !== ''));
    setBetSlips(division);
  };

  return (
    <Grid container justify="center" className={classes.minMargin}>
      <Grid item xs={11} md={10} lg={9}>
        <Typography variant="h5" align="center" className={classes.header}>
          Divisor de prognósticos
        </Typography>
        <Grid container spacing={3} className={classes.marginContent}>
          {betSlips.length === 0 ? (
            <>
              <Prognosticos value={bets} onChange={e => setBets(e.target.value)} />
              <EntriesAndAction
                betsByEntry={betsByEntry}
                onChangeBets={e => setBetsByEntry(e.target.value)}
                totalBets={totalBets}
                divideBets={divideBets}
              />
            </>
          ) : (
            <>
              {betSlips.map(({ name, games }, idx) => (
                <Betslip key={idx} name={name} games={games} />
              ))}
              <BackOrRepeat
                setBetSlips={setBetSlips}
                setBetsByEntry={setBetsByEntry}
                divideBets={divideBets}
              />
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
