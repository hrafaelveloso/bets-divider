const combiner = (total, right) => {
  const remain = total - right;
  const combinationsBinary = '1'.repeat(remain);
  const combinations = parseInt(combinationsBinary, 2);
  const results = [];

  for (let i = 0; i <= combinations; i++) {
    results.push(i.toString(2).padStart(remain, '0'));
  }

  return results;
};

export default combiner;
