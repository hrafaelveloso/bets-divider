import React, { useState, useEffect, useCallback } from 'react';
import { Grid, makeStyles, Typography, Dialog, DialogContent, DialogTitle, IconButton, Button, Box } from '@material-ui/core';
import divider from '../../utils/divider';
import Prognosticos from './pieces/Prognosticos';
import EntriesAndAction from './pieces/EntriesAndAction';
import Betslip from './pieces/Betslip';
import BackOrRepeat from './pieces/BackOrRepeat';
import { Close } from '@material-ui/icons';
import EntriesCombiner from './pieces/EntriesCombiner';
import clsx from 'clsx';

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
  buttonSecondary: {
    backgroundColor: '#169429',
    '&:hover': {
      backgroundColor: '#1a6125',
    },
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
  const [rightGames, setRightGames] = useState('');
  const [totalBets, setTotalBets] = useState(0);
  const [bets, setBets] = useState('');
  const [betSlips, setBetSlips] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [menu, setMenu] = useState('divisor');

  useEffect(() => {
    setTotalBets(bets.split(/\r*\n/).filter(x => x !== '').length);
  }, [bets]);

  const divideBets = e => {
    e.preventDefault();

    const division = divider(betsByEntry, bets.split(/\r*\n/).filter(x => x !== ''));
    setBetSlips(division);
  };

  const combineBets = e => {
    e.preventDefault();

    console.log('OIOI');
  };

  const toggleModal = useCallback(() => {
    setOpenModal(x => !x);
  }, []);

  const changeMenu = useCallback(
    e => {
      e.preventDefault();

      if (menu === 'divisor') {
        return setMenu('desdobrador');
      }

      return setMenu('divisor');
    },
    [menu]
  );

  return (
    <Grid container justify="center" className={classes.minMargin}>
      <Grid item xs={11} md={10} lg={9}>
        <Typography variant="h5" align="center" className={classes.header}>
          {menu === 'divisor' ? 'Divisor' : 'Desdobrador'} de prognósticos
        </Typography>
        <Box width="100%" display="flex" justifyContent="center" marginTop="10px">
          <Button variant="contained" color="primary" onClick={changeMenu} className={clsx({ [classes.buttonSecondary]: menu === 'divisor' })}>
            Mudar para {menu === 'divisor' ? 'Desdobrador' : 'Divisor'}
          </Button>
        </Box>
        <Grid container spacing={3} className={classes.marginContent}>
          {betSlips.length === 0 ? (
            <>
              <Prognosticos value={bets} totalBets={totalBets} onChange={e => setBets(e.target.value)} toggleModal={toggleModal} menu={menu} />
              {menu === 'divisor' ? (
                <EntriesAndAction
                  betsByEntry={betsByEntry}
                  onChangeBets={e => setBetsByEntry(e.target.value)}
                  totalBets={totalBets}
                  divideBets={divideBets}
                />
              ) : (
                <EntriesCombiner
                  totalBets={totalBets}
                  combineBets={combineBets}
                  rightGames={rightGames}
                  onChangeRight={e => setRightGames(e.target.value)}
                />
              )}
            </>
          ) : (
            <>
              {betSlips.map(({ name, games, odd }, idx) => (
                <Betslip key={idx} name={name} games={games} odd={odd} />
              ))}
              <BackOrRepeat setBetSlips={setBetSlips} setBetsByEntry={setBetsByEntry} divideBets={divideBets} />
            </>
          )}
        </Grid>
      </Grid>
      <Dialog open={openModal} fullWidth onClose={toggleModal}>
        <DialogTitle>
          Informação sobre o {menu === 'divisor' ? 'Divisor' : 'Desdobrador'}
          <IconButton aria-label="Close" className={classes.closeButton} onClick={toggleModal}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {menu === 'divisor' ? (
            <>
              <Typography paragraph>
                <b>1-</b> Insira um prognóstico por linha na caixa de texto.
              </Typography>
              <Typography paragraph>
                <b>2-</b> Escolha quantos prognósticos quer por boletim gerado.
              </Typography>
              <Typography paragraph>
                <b>3-</b> Após clique no botão 'Dividir prognósticos' são exibidos os boletins gerados.
              </Typography>
              <Typography>Para obter a odd correspondente do boletim final, insira o prognóstico com a odd do evento após um @.</Typography>
              <Typography variant="subtitle2">Exemplo:</Typography>
              <Typography>Portugal TR1 @1.75</Typography>
            </>
          ) : (
            <>
              <Typography paragraph>
                <b>1-</b> Insira um prognóstico por linha na caixa de texto, com os prognósticos 'certos' ordenados.
              </Typography>
              <Typography paragraph>
                <b>2-</b> Escolha quantos prognósticos são considerados 'certos'. Estes prognósticos mantêm-se iguais em todos os boletins
                desdobrados.
              </Typography>
              <Typography paragraph>
                <b>3-</b> Após clique no botão 'Desdobrar prognósticos' são exibidos os boletins geradas.
              </Typography>
              <Typography>Existe um limite de 4 prognósticos para serem desdobrados, uma vez que:</Typography>
              <Typography>1 jogo a desdobrar -> 2 boletins</Typography>
              <Typography>2 jogos a desdobrar -> 4 boletins</Typography>
              <Typography>3 jogos a desdobrar -> 8 boletins</Typography>
              <Typography>4 jogos a desdobrar -> 16 boletins</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Content;
