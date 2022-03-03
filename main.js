window.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('#board');
  const winnerContainer = document.querySelector('#winner');
  const boxes = document.querySelectorAll('.box');

  const game = new Array(9).fill('');
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let turn = 0;

  board.addEventListener('click', (e) => {
    // Do nothing if the box is already occupied
    if (e.target.innerText !== '') return;

    const currentPlayer = turn % 2 === 0 ? 'O' : 'X';
    const currentIndex = e.target.dataset.index;

    updateBoard(currentPlayer, currentIndex);

    const winner = turn >= 2 ? checkWinner(currentPlayer) : null;

    if (winner) {
      winnerContainer.classList.remove('hide');
      winnerContainer.innerText = `${currentPlayer} HAS WON THE GAME🎉🎉🎉`;
      board.classList.add('disable');
    }
  });

  const updateBoard = (player, index) => {
    boxes[index].innerText = player;
    boxes[index].classList.add(`player_${player}`);
    game[index] = player;
    turn += 1;
  };

  const checkWinner = (player) => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (game[a] === player && game[b] === player && game[c] === player) {
        return player;
      }
    }

    return null;
  };
});
