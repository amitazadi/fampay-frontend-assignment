import { useEffect, useState } from 'react'
import './index.css'
import logo from './Images/logo.svg'
import ShowBigDisplayCards from './components/BigDisplayCards/ShowBigDisplayCards'
import ShowSmallCardsArrow from './components/SmallCardsArrow/ShowSmallCardsArrow'
import ShowImageCards from './components/ImageCards/ShowImageCards'
import ShowDynamicWidthCards from './components/DynamicWidthCards/ShowDynamicWidthCards'
import ShowSmallCardsNoArrow from './components/SmallCardsNoArrow/ShowSmallCardsNoArrow'

import filterFetchedData from './utils/filterFetchedData'
import PullToRefresh from 'react-simple-pull-to-refresh'

function App() {
  const [bigDisplayCards, setBigDisplayCards] = useState()
  const [smallCardsArrow, setSmallCardsArrow] = useState()
  const [imageCards, setImageCards] = useState()
  const [dynamicWidthCards, setDynamicWidthCards] = useState()
  const [smallCardsNoArrow, setSmallCardsNoArrow] = useState()

  const [boolToRefresh, setBoolToRefresh] = useState(false)

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards)
      setSmallCardsArrow(data.smallCardsArrow)
      setImageCards(data.imgCards)
      setDynamicWidthCards(data.dynamicWidthCards)
      setSmallCardsNoArrow(data.smallCardsNoArrow)
    })
  }, [])

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards)
      setSmallCardsArrow(data.smallCardsArrow)
      setImageCards(data.imgCards)
      setDynamicWidthCards(data.dynamicWidthCards)
      setSmallCardsNoArrow(data.smallCardsNoArrow)
    })
  }, [boolToRefresh])

  const refreshHandler = () => {
    setBoolToRefresh(!boolToRefresh)
    setBigDisplayCards(null)
    setImageCards(null)
    setSmallCardsArrow(null)
    setSmallCardsNoArrow(null)
  }

  return (
    <div className="main-container">
      <div className="logo-heading">
        <img className="logo" src={logo} alt="fampay-logo" />
      </div>

      <PullToRefresh onRefresh={refreshHandler} canFetchMore={true} isPullable={true}>
        <ShowBigDisplayCards cardsData={bigDisplayCards} />
        <ShowSmallCardsArrow cardsData={smallCardsArrow} />
        <ShowImageCards cardsData={imageCards} />
        <ShowDynamicWidthCards cardsData={dynamicWidthCards} />
        <ShowSmallCardsNoArrow cardsData={smallCardsNoArrow} />
      </PullToRefresh>
    </div>
  )
}

export default App
