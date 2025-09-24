import React, { use } from 'react'

import Card from '../PlayerCard/Card'
const Player = ({
  playerPromise,
  setBallance,
  ballance,
  sowCard,
  setSowCard,
}) => {
  const PlayerData = use(playerPromise)

  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 bg-black">
      {PlayerData.map((player) => (
        <Card
       
          setSowCard={setSowCard}
          sowCard={sowCard}
          setBallance={setBallance}
          player={player}
          ballance={ballance}
        ></Card>
      ))}
    </div>
  )
}

export default Player
