import {useState} from "react";
import Card from "../Card/Card";
import './Grid.css'

function Grid({numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));

    return (
        <div className="grid">
            {board.map((el,ind) => <Card key={ind}/>)}
        </div>
    )
};

export default Grid;