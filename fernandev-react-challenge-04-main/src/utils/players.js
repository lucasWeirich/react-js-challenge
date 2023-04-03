export const playersInitial = [
  {
    id: 1,
    name: 'Player 01',
    type: 'o',
    color: '#00a4e6',
    wins: 0,
  },
  {
    id: 2,
    name: 'Player 02',
    type: 'x',
    color: '#d31f1f',
    wins: 0,
  }
];

setTimeout(() => {
  playersInitial[0].name = "Lucas Weirich"
}, 1000)