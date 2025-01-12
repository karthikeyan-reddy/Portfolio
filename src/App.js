import './App.css';
import { useState } from "react";
import $ from "jquery"

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const winnerList = [[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],]

  function handleClick(i) {
    if (IsWinner(squares) || squares[i]) {
      return;
    }
    const allBtn = squares.slice()
    if (isXNext) {
      allBtn[i] = 'X';
      setSquares(allBtn)
      setIsXNext(false);
    }
    else {
      allBtn[i] = 'O';
      setSquares(allBtn);
      setIsXNext(true);
    }
    IsWinner(allBtn);
  }

  function Square({ value, setValue }) {
    return (
      <button className='gamebtn' onClick={setValue}>{value}</button>
    )
  }

  function resetGame() {
    for (let index = 0; index < squares.length; index++) {
      squares[index] = null;
    }
    handleClick()
    setIsXNext(true);
    $('#status').html('');
  }

  function IsWinner(allBtn) {
    var returnValue = null;
    for (var i = 0; i < winnerList.length; i++) {
      const [a, b, c] = winnerList[i];
      if (allBtn[a] && allBtn[a] == allBtn[b] && allBtn[b] == allBtn[c]) {
        $('#status').html(`Winner is ${allBtn[a]}`);
        returnValue = allBtn[a];
      }
    }
    return returnValue;
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          Tic-Tac-Toe
          <div id='status' style={{ color: 'yellow' }}></div>
        </header>
      </div>
      <div className='panel'>
        <div>
          <Square value={squares[0]} setValue={() => handleClick(0)}></Square>
          <Square value={squares[1]} setValue={() => handleClick(1)}></Square>
          <Square value={squares[2]} setValue={() => handleClick(2)}></Square>
        </div>
        <div>
          <Square value={squares[3]} setValue={() => handleClick(3)}></Square>
          <Square value={squares[4]} setValue={() => handleClick(4)}></Square>
          <Square value={squares[5]} setValue={() => handleClick(5)}></Square>
        </div>
        <div>
          <Square value={squares[6]} setValue={() => handleClick(6)}></Square>
          <Square value={squares[7]} setValue={() => handleClick(7)}></Square>
          <Square value={squares[8]} setValue={() => handleClick(8)}></Square>
        </div>
        <div><button onClick={resetGame} style={{background:'orange' , color:'black' , width:'150px',height:'50px'}}>Reset</button></div>
      </div>
    </>
  );
}

export default App;
