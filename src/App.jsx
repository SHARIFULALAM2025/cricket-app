
import { Suspense, useState } from 'react'
import './App.css'
import Player from './Components/AvailablePlayers/Player'
import Navbar from './Components/Navbar/Navbar'
import Selected from './Components/SelectedPlayer/Selected'
 import { ToastContainer} from 'react-toastify'
import Banner from './Banner/Banner'
import Footer from './Components/Footer/Footer'
const fetchPlayer = async () => {
  const res = await fetch('/player.json')
  return res.json()

}


const playerPromise = fetchPlayer()
function App() {
  const [ballance,setBallance]=useState(600000000)
  const [toggle, setToggle] = useState(true);
  const [sowCard, setSowCard] = useState([])


  const removeCard = (p) => {
    const deleteAllData = sowCard.filter(ply => ply.id !== p.id)
    setSowCard(deleteAllData)
    setBallance(ballance + parseInt(p['price']))


}
  return (
    <>
      <Navbar ballance={ballance}></Navbar>
      <Banner></Banner>
      <div className=" max-w-[1200px] mx-auto flex justify-between items-center mt-3.5 mb-3.5">
        <h1 className="">
          {toggle === true
            ? 'avabile player'
            : `Selected players(${sowCard.length}/6)`}
        </h1>
        <div className="flex flex-row ">
          <button
            onClick={() => setToggle(true)}
            className={`p-3 border-2 border-gray-400 border-r-0 rounded-l-2xl ${
              toggle === true ? 'bg-[#E7FE29]' : ''
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`p-3 border-2 border-gray-400 border-l-0 rounded-r-2xl ${
              toggle == false ? 'bg-[#E7FE29]' : ''
            }`}
          >
            Selected <span>({sowCard.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl flex mx-auto items-center"></span>
          }
        >
          <Player
            setSowCard={setSowCard}
            sowCard={sowCard}
            ballance={ballance}
            setBallance={setBallance}
            playerPromise={playerPromise}
          ></Player>
        </Suspense>
      ) : (
        <Selected removeCard={removeCard} sowCard={sowCard}></Selected>
      )}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
