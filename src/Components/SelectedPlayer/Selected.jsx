import React from 'react';
import Cards from '../SelectedCard/Cards';


const Selected = ({ sowCard, removeCard }) => {
  console.log(sowCard)

  return (
    <div className="max-w-[1200px] mx-auto">
      {sowCard.map((play) => (
        <Cards removeCard={removeCard} play={play}></Cards>
      ))}
      {/* <Cards></Cards> */}
    </div>
  )
}

export default Selected;


