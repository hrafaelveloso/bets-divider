const getMenuName = value => {
  switch (value) {
    case 'divisor':
      return 'Divisor';
    default:
      return 'Desdobrador';
  }
};

export default getMenuName;
