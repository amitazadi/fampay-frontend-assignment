import { useEffect, useState } from 'react'
import './index.css'
import logo from './Images/logo.svg'
import ShowBigDisplayCards from './components/BigDisplayCards/ShowBigDisplayCards'
import ShowSmallCardsArrow from './components/SmallCardsArrow/ShowSmallCardsArrow';

import filterFetchedData from './utils/filterFetchedData'

function App() {
  const [bigDisplayCards, setBigDisplayCards] = useState()
  const [smallCardsArrow, setSmallCardsArrow] = useState();


  // const [boolToRefresh, setBoolToRefresh] = useState(false);

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards)
      setSmallCardsArrow(data.smallCardsArrow);
  
    })
  }, [])

  return (
    <div className="main-container">
      <div className="logo-heading">
        <img className="logo" src={logo} alt="fampay-logo" />
      </div>

      <ShowBigDisplayCards cardsData={bigDisplayCards} />
      <ShowSmallCardsArrow cardsData={smallCardsArrow} />

    </div>
  )
}

export default App
