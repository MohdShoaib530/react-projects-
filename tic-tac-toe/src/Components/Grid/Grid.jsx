import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css'
import isWinner from "../../Helpers/CheckWinner.js";
import PlayerInfo from "../player/PlayerInfo.jsx";

function Grid({numberOfCards,player1,player2}){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const  [turn, setTurn] = useState(true);
    const [winner, setWinner] = useState(null)
    // const [playerTurn,setPlayer] = useState([player1,player2])

    function play(index){
        if(turn === true){
            board[index] = player1;
        } else {
            board[index] = player2;
        }
        //check for winner
        const win = isWinner(board,turn ? player1 : player2)
        if(win){
          setWinner(win)  
        }
        setBoard([...board])
        setTurn(!turn)
    }
    
    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""))
    }
    return (
        <div className="grid-wrapper">
        {winner ? (
            <>
                <h1 className="turn-highlight">Winner is: {winner}</h1>
                <button className="reset" onClick={reset}>Play Again</button>
            </>
        ) : (
            <>
                <h1 className="turn-highlight">Current turn: {(turn) ? player1 : player2}</h1>
                <div className="grid">
                    {board.map((el, ind) => <Card gameEnd={winner ? true : false} key={ind} onPlay={play} player={el} index={ind} player1Icon={player1} player2Icon={player2} />)}
                </div>
            </>
        )}
    </div>
    )
};

export default Grid;