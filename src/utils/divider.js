const divider = (betsByEntry, bets) => {
  const numberOfBets = Math.floor(bets.length / betsByEntry);
  const availableIndexes = [...Array(bets.length).keys()];
  const betSlips = [];

  for (let i = 0; i < numberOfBets; i++) {
    const newBetslip = { name: `Aposta #${i + 1}`, games: [] };
    betSlips.push(newBetslip);

    // @ Percorre a betSlip e adiciona os jogos
    for (let j = 0; j < betsByEntry; j++) {
      if (j === 0) {
        const item = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
        // @ Primeiro jogo desta betSlip, pode adicionar à vontade e remover o index de disponível
        betSlips[i].games.push(bets[item]);

        const indexItem = availableIndexes.indexOf(item);
        availableIndexes.splice(indexItem, 1);
      } else {
        let item = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
        let betGame = bets[item].split(' ')[0];
        const betSlipGames = betSlips[i].games.map(x => x.split(' ')[0]);

        // @ Enquanto que os jogos que estejam nesta betslip comecem pela mesma equipa que o escolhido
        while (betSlipGames.includes(betGame)) {
          let item = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
          betGame = bets[item].split(' ')[0];
        }

        betSlips[i].games.push(bets[item]);
        const indexItem = availableIndexes.indexOf(item);
        availableIndexes.splice(indexItem, 1);
      }
    }
  }

  return betSlips;
};

export default divider;