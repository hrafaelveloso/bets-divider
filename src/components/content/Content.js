import React, { useState, useEffect, useCallback } from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@material-ui/core';
import divider from '../../utils/divider';
import Prognosticos from './pieces/Prognosticos';
import EntriesAndAction from './pieces/EntriesAndAction';
import Betslip from './pieces/Betslip';
import BackOrRepeat from './pieces/BackOrRepeat';
import { Close } from '@material-ui/icons';

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
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const Content = () => {
  const classes = useStyles();
  const [betsByEntry, setBetsByEntry] = useState('');
  const [totalBets, setTotalBets] = useState(0);
  const [bets, setBets] = useState('');
  const [betSlips, setBetSlips] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setTotalBets(bets.split(/\r*\n/).filter(x => x !== '').length);
  }, [bets]);

  const divideBets = e => {
    e.preventDefault();

    const division = divider(betsByEntry, bets.split(/\r*\n/).filter(x => x !== ''));
    setBetSlips(division);
  };

  const toggleModal = useCallback(() => {
    setOpenModal(x => !x);
  }, []);

  return (
    <Grid container justify="center" className={classes.minMargin}>
      <Grid item xs={11} md={10} lg={9}>
        <Typography variant="h5" align="center" className={classes.header}>
          Divisor de prognósticos
        </Typography>
        <Grid container spacing={3} className={classes.marginContent}>
          {betSlips.length === 0 ? (
            <>
              <Prognosticos
                value={bets}
                totalBets={totalBets}
                onChange={e => setBets(e.target.value)}
                toggleModal={toggleModal}
              />
              <EntriesAndAction
                betsByEntry={betsByEntry}
                onChangeBets={e => setBetsByEntry(e.target.value)}
                totalBets={totalBets}
                divideBets={divideBets}
              />
            </>
          ) : (
            <>
              {betSlips.map(({ name, games, odd }, idx) => (
                <Betslip key={idx} name={name} games={games} odd={odd} />
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
      <Dialog open={openModal} fullWidth onClose={toggleModal}>
        <DialogTitle>
          Informação
          <IconButton aria-label="Close" className={classes.closeButton} onClick={toggleModal}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography paragraph>
            <b>1-</b> Insira um prognóstico por linha na caixa de texto.
          </Typography>
          <Typography paragraph>
            <b>2-</b> Escolha quantos prognósticos quer por aposta gerada.
          </Typography>
          <Typography paragraph>
            <b>3-</b> Após clique no botão 'Dividir prognósticos' são exibidas as apostas geradas.
          </Typography>
          <Typography>
            Para obter a odd correspondente da aposta final, insira o prognóstico com a odd do
            evento após um @.
          </Typography>
          <Typography variant="subtitle2">Exemplo:</Typography>
          <Typography>Portugal TR1 @1.75</Typography>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Content;
