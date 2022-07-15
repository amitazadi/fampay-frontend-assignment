import { useEffect, useState } from 'react'
import './index.css'
import logo from './logo.svg'
import ShowBigDisplayCards from './components/BigDisplayCards/ShowBigDisplayCards'
import filterFetchedData from './utils/filterFetchedData'

function App() {
  const [bigDisplayCards, setBigDisplayCards] = useState()
  // const [boolToRefresh, setBoolToRefresh] = useState(false);

  useEffect(() => {
    filterFetchedData().then((data) => {
      setBigDisplayCards(data.bigDisplayCards)
    })
  }, [])

  return (
    <div>
      <div className="logo-heading">
        <img className="logo" src={logo} alt="fampay-logo" />
      </div>

      <div className="cards">
        <ShowBigDisplayCards cardsData={bigDisplayCards} />
      </div>

    </div>
  )
}

export default App
