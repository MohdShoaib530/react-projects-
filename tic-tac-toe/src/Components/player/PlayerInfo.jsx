import React, { useState } from "react";
import Grid from "../Grid/Grid";
import './Player.css'

function PlayerInfo() {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [showPlayers, setShowPlayers] = useState(false);

  const handlePlayer1NameChange = (e) => {
    setPlayer1Name(e.target.value);
  };

  const handlePlayer2NameChange = (e) => {
    setPlayer2Name(e.target.value);
  };

  const handleClick = () => {
    setShowPlayers(true);
  };

  return (
    <>
      {!showPlayers ? (
        <div className="twoplayers">
          <p>Name of first Player: <input value={player1Name} onChange={handlePlayer1NameChange} /></p>
          <p>Name of second Player: <input value={player2Name} onChange={handlePlayer2NameChange} /></p>
          <button onClick={handleClick}>Play</button>
        </div>
      ) : (
        <>
          <span className="player">Player1: <span className="playerColor">{player1Name} </span></span>
          <span className="player">Player2: <span className="playerColor">{player2Name}</span></span>
          <Grid numberOfCards={9} player1={player1Name} player2={player2Name} /> {/* Render the Grid component */}
        </>
      )}
    </>
  );
}

export default PlayerInfo;
