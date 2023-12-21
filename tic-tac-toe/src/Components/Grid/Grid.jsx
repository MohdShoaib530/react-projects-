import {useState} from "react";
import Card from "../Card/Card";
import './Grid.css'

function Grid({numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const  [turn,setTurn] = useState(true)

    return (
        <div className="grid-wrapper">
            <h1 className="grid-highlight">Current turn:{(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
               {board.map((el,ind) => <Card key={ind}/>)}
            </div>
        </div>
    )
};

export default Grid;