import { useState } from "react";
import "./App.css";

function calculateWinneer(squares) {
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// JSX
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinneer(squares) || squares[i]) {
      return;
    }
    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinneer(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const list = [];
  squares.forEach((item, index) => {
    const line = ~~(index / 3);
    const column = index % 3;
    if (!list[line]) {
      list[line] = [null, null, null];
    }
    list[line][column] = item;
  });

  let index = -1;

  return (
    <>
      <div className="status">{status}</div>
      {list.map((line, indexLine) => {
        return (
          <div key={indexLine}>
            {line.map(() => {
              index += 1;
              const nowIndex = index;
              return (
                <Square
                  key={nowIndex}
                  value={squares[nowIndex]}
                  onSquareClick={() => handleClick(nowIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );

  // return (
  //   <>
  //     <div className="status">{status}</div>
  //     <div className="border-row">
  //       <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
  //       <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
  //       <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  //     </div>
  //     <div className="border-row">
  //       <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
  //       <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
  //       <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
  //     </div>
  //     <div className="border-row">
  //       <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
  //       <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
  //       <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  //     </div>
  //   </>
  // );
}

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const lastHistory = history.slice(0, currentMove + 1);
    const nextHistory = [...lastHistory, nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function handleJumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div className="game-borad">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        {/* ol, ul */}
        <ol>
          {history.map((squares, index) => {
            let description;
            if (index === 0) {
              description = "Go to game start";
            } else {
              description = "Go to game #" + index;
            }
            return (
              <li key={index}>
                <button onClick={() => handleJumpTo(index)}>
                  {description}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
