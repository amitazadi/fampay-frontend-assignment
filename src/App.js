import { useEffect, useState } from 'react'
import './index.css'
import logo from './Images/logo.svg'
import ShowBigDisplayCards from './components/BigDisplayCards/ShowBigDisplayCards'
import ShowSmallCardsArrow from './components/SmallCardsArrow/ShowSmallCardsArrow'
import ShowImageCards from './components/ImageCards/ShowImageCards'
import ShowDynamicWidthCards from './components/DynamicWidthCards/ShowDynamicWidthCards'

import filterFetchedData from './utils/filterFetchedData'

function App() {
  const [bigDisplayCards, setBigDisplayCards] = useState()
  const [smallCardsArrow, setSmallCardsArrow] = useState()
  const [imageCards, setImageCards] = useState()
  const [dynamicWidthCards, setDynamicWidthCards] = useState()

  // const [boolToRefresh, setBoolToRefresh] = useState(false);

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards)
      setSmallCardsArrow(data.smallCardsArrow)
      setImageCards(data.imgCards)
      setDynamicWidthCards(data.dynamicWidthCards)
    })
  }, [])

  return (
    <div className="main-container">
      <div className="logo-heading">
        <img className="logo" src={logo} alt="fampay-logo" />
      </div>

      <ShowBigDisplayCards cardsData={bigDisplayCards} />
      <ShowSmallCardsArrow cardsData={smallCardsArrow} />
      <ShowImageCards cardsData={imageCards} />
      <ShowDynamicWidthCards cardsData={dynamicWidthCards} />
    </div>
  )
}

export default App
