import React, { useState } from 'react';
import manImage from '../../../src/assets/man.png'
import { toast } from 'react-toastify';
const Card = ({ player, setBallance, ballance, sowCard, setSowCard }) => {
  const [isSelected, setIsSelected] = useState(false)
  const handelFunction = (playerData) => {
    const amount = playerData['price']
    if (ballance < amount) {
      toast('your price is low')
      return
    }
    if (sowCard.length === 6) {
      toast("6 player already selected")
    }
    setIsSelected(true);
    setBallance(ballance - amount);
    setSowCard([...sowCard, playerData])
  }
  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure>
        <img
          src={player['player-img']}
          alt="player"
          className="w-full h-[200px] object-cover"
        />
      </figure>
      <div className="border-b-2 pb-2 border-b-blue-200">
        <div className="flex ">
          <img src={manImage} alt="" />
          <h2 className="card-title">{player['player-name']}</h2>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src={player['flag']} alt="" className="w-4 h-4" />
            <span>{player['player-country']}</span>
          </div>
          <button className="btn btn-xs">{player['playing-role']}</button>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>

      <div className="flex justify-between">
        <h1>Rating</h1>
        <span>{player['rating']}</span>
      </div>
      <div className="flex justify-between">
        <h1>bating-style</h1>
        <span>{player['bating-style']}</span>
      </div>
      <div className="flex justify-between">
        <h1>bolling-style</h1>
        <span>{player['bolling-style']}</span>
      </div>
      <div className="flex justify-between">
        <h1>price:{player['price']}taka</h1>
        <button
          disabled={isSelected}
          onClick={() => {
            handelFunction(player)
          }}
          className="btn"
        >
          {isSelected === true ? 'Selected' : 'Choose Player'}
        </button>
      </div>
    </div>
  )
}

export default Card;