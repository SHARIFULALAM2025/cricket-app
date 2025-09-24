import React from 'react';

const Cards = ({ play, removeCard }) => {
    const deleteHandel = () => {
        removeCard(play)

    }
  return (
    <div className="border-2 border-[#131313] flex justify-between items-center p-1 rounded-xl mt-3">
      <div className="flex gap-3.5 items-center">
        <figure>
          <img
            src={play['player-img']}
            alt=""
            className="w-16 h-16 rounded-xl"
          />
        </figure>
        <div>
          <h1 className="text-base font-bold">{play['player-name']}</h1>
          <p className="text-xs">{play['playing-role']}</p>
        </div>
      </div>
      <div onClick={deleteHandel}>
        <figure>
          <img
            src="https://i.ibb.co.com/MxQkzddj/images.png"
            alt=""
            className="w-5"
          />
        </figure>
      </div>
    </div>
  )
}

export default Cards;