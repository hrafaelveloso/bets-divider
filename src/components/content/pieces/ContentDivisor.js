import React from 'react';
import { Typography } from '@material-ui/core';

const ContentDivisor = () => {
  return (
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
  );
};

export default ContentDivisor;
