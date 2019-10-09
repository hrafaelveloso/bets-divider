import React from 'react';
import { Typography } from '@material-ui/core';

const ContentCombiner = () => {
  return (
    <>
      <Typography paragraph>
        <b>1-</b> Insira um prognóstico por linha na caixa de texto, com os prognósticos 'certos' ordenados.
      </Typography>
      <Typography paragraph>
        <b>2-</b> Escolha quantos prognósticos são considerados 'certos'. Estes prognósticos mantêm-se iguais em todos os boletins desdobrados.
      </Typography>
      <Typography paragraph>
        <b>3-</b> Após clique no botão 'Desdobrar prognósticos' são exibidos os boletins gerados.
      </Typography>
      <Typography>Existe um limite de 4 prognósticos para serem desdobrados, uma vez que:</Typography>
      <Typography>1 jogo a desdobrar -> 2 boletins</Typography>
      <Typography>2 jogos a desdobrar -> 4 boletins</Typography>
      <Typography>3 jogos a desdobrar -> 8 boletins</Typography>
      <Typography>4 jogos a desdobrar -> 16 boletins</Typography>
    </>
  );
};

export default ContentCombiner;
