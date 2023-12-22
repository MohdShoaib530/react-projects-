import Icon from "../Icons/Icon";
import "./Card.css" 

function Card({gameEnd,player, onPlay, index,player1Icon,player2Icon}){
    let icon = <Icon/>

    if(player === player1Icon){
        icon = <Icon name="cross"/>
    } else if (player === player2Icon){
        icon = <Icon name="circle"/>
    }

    return (
        <div className="card" onClick={() => !gameEnd && player=="" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;