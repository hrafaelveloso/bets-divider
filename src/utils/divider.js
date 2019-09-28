// const bets = [
//   'Atletico TR2',
//   'Real TR1',
//   'Napoli TR1',
//   'Paris Saint Germain TR1',
//   'Gent TR2',
//   'Club Brugge Handicap 2 -1.5',
//   'Waregem TR1',
//   'Royale Union St. Gilloise TR1',
//   'Maribor TR1',
//   'PSV TR1',
//   'Ajax Handicap 1 -1.5',
//   'Vozdovac TR2',
//   'Javor Ivanjica TR2',
//   'Basel TR1',
//   'Hacken TR1',
//   'AIC Estocolmo TR1',
// ];

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
};

export default divider;
