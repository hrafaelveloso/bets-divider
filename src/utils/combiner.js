const combiner = (total, right, bets) => {
  const remain = total - right;
  const combinationsBinary = '1'.repeat(remain);
  const combinations = parseInt(combinationsBinary, 2);
  // const results = [];
  const betSlips = [];

  for (let i = 0; i <= combinations; i++) {
    const newBetslip = { name: `Boletim #${i + 1}`, games: bets.slice(0, right) };
    const binary = i
      .toString(2)
      .padStart(remain, '0')
      .split('');

    let k = 0;
    for (let j = right; j < total; j++) {
      const bet = binary[k] === '0' ? 'X' : 'TR';
      newBetslip.games.push(`${bets[j]} ${bet}`);
      k++;
    }

    betSlips.push(newBetslip);
    // results.push(i.toString(2).padStart(remain, '0'));
  }

  return betSlips;
};

export default combiner;
