import { boardGameInitial, waysToWin } from './utils/boardGame';
import { useEffect, useState } from 'react';
import './App.css';
import * as CSS from './slyted';
import { playersInitial } from './utils/players';
import { PopupMessages } from './components/PopupMessages';
import Form from './components/Form';


/*
  DESAFIO TÉCNICO - JOGO DA VELHA - por fernandev

  * descrição
    desenvolva um jogo da velha (tic tac toe) funcional.
    use qualquer técnica de estilização preferida: css modules, sass, styled.

  * tasks
    ? - crie um board de 3x3
    ? - dois jogadores
    ? - ao clicar em um quadrado, preencher com a jogada
    ? - avisar quando o jogo finalizar, caso dê velha avise também
    ? - fazer um risco na sequência vencedora, caso houver
*/

function App() {

  const [boardGame, setBoardGame] = useState(boardGameInitial);
  const [players, setPlayers] = useState(playersInitial);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [infoPopup, setInfoPopup] = useState('');

  function handleClickBlock(e) {
    const { id } = e.target;

    updateBoardGame(id);
  }

  function updateBoardGame(id) {
    const { type, color } = players[currentPlayer];

    setBoardGame(prev => {
      let newBoardGame = prev.map(block => {
        if (block.id === Number(id)) {
          block = {
            ...block,
            type: type,
            color: color,
          };
        }
        return block
      });

      return newBoardGame;
    })
  }

  function playerWinner(id) {

    setPlayers(prev => {
      let newPlayers = prev.map(player => {
        if (player.id === Number(id)) {
          player = {
            ...player,
            wins: player.wins + 1
          };
        }
        return player;
      });

      return newPlayers;
    });
  }

  useEffect(() => {
    function checkForWin() {
      for (const way of waysToWin) {
        const { id, name, type } = players[currentPlayer];
        const winner = boardGame.filter(block => way.includes(block.id)).every(block => block.type === type);

        if (winner) {
          setDisabled(true)
          playerWinner(id);
          setInfoPopup(`Player: ${name}, winner!!! Click in reset for new game!`);
          return;
        }
      }

      let notWinner = boardGame.filter(block => block.type !== '');

      if (notWinner[8]) {
        setDisabled(true);
        setInfoPopup('No player won! Click in reset for new game!')
      }

      setCurrentPlayer(currentPlayer === 0 ? 1 : 0);
    }

    checkForWin();
  }, [boardGame])

  function handleResetGame() {
    setBoardGame(boardGameInitial);
    setDisabled(false);
    setInfoPopup('');
  }

  const handleFormSubmit = (players) => {
    setPlayers(players);
  }

  return (
    <>
      <Form onFormSubmit={handleFormSubmit} />

      <PopupMessages
        currentPlayer={{ name: players[currentPlayer].name, color: players[currentPlayer].color }}
        info={infoPopup}
      />

      <h3>desafio fernandev</h3>
      <h1>jogo da velha</h1>

      <CSS.Players>
        {players.map(player => {
          return (
            <CSS.Player
              key={player.id}
              color={player.color}
            >
              {player.name}

              <span>{player.wins}</span>
            </CSS.Player>
          );
        })}
      </CSS.Players>

      <CSS.Reset onClick={handleResetGame} className={disabled && 'active'}>RESET</CSS.Reset>

      <CSS.BoardGame>
        {
          boardGame.map(block => {
            return (
              <CSS.BlockBoard
                key={block.id}
                id={block.id}
                color={block.color}
                disabled={block.type || disabled}
                onClick={handleClickBlock}
              >
                {block.type}
              </CSS.BlockBoard>
            )
          })
        }
      </CSS.BoardGame>
    </>
  );
}

export default App;
