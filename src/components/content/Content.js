import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Grid, makeStyles, Typography, Dialog, DialogContent, DialogTitle, IconButton, Button, Box } from '@material-ui/core';
import divider from '../../utils/divider';
import Prognosticos from './pieces/Prognosticos';
import EntriesAndAction from './pieces/EntriesAndAction';
import Betslip from './pieces/Betslip';
import BackOrRepeat from './pieces/BackOrRepeat';
import { Close } from '@material-ui/icons';
import EntriesCombiner from './pieces/EntriesCombiner';
import clsx from 'clsx';
import combiner from '../../utils/combiner';
import ContentDivisor from './pieces/ContentDivisor';
import ContentCombiner from './pieces/ContentCombiner';
import getMenuName from '../../utils/getMenuName';

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
  const menuName = useMemo(() => getMenuName(menu), [menu]);

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

    const combining = combiner(totalBets, rightGames, bets.split(/\r*\n/).filter(x => x !== ''));

    setBetSlips(combining);
  };

  const toggleModal = useCallback(() => {
    setOpenModal(x => !x);
  }, []);

  const changeMenu = useCallback(
    e => {
      e.preventDefault();
      setBetSlips([]);

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
          {menuName} de prognósticos
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
                <Betslip key={idx} name={name} games={games} odd={odd} rightGames={rightGames} menu={menu} />
              ))}
              <BackOrRepeat setBetSlips={setBetSlips} setBetsByEntry={setBetsByEntry} divideBets={divideBets} menu={menu} />
            </>
          )}
        </Grid>
      </Grid>
      <Dialog open={openModal} fullWidth onClose={toggleModal}>
        <DialogTitle>
          Informação sobre o {menuName}
          <IconButton aria-label="Close" className={classes.closeButton} onClick={toggleModal}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>{menu === 'divisor' ? <ContentDivisor /> : <ContentCombiner />}</DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Content;
