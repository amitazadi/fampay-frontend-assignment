import { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import './ImageCards.css'

const ShowImageCards = ({ cardsData }) => {
  const [cards, setCards] = useState()

  useEffect(() => {
    const allCards = []
    cardsData?.forEach((card) => {
      allCards.push(...card.cards)
    })
    setCards(allCards)
  }, [cardsData])

  return (
    <div className="image-cards-container">
      {cards === undefined
        ? <h1 style={{}}>Loading...</h1>
        : cards.map((card) => {
            const {
              url,
              name,
              bg_image: { image_url: bgImageUrl },
            } = card
            return <ImageCard url={url} key={name} bgImageUrl={bgImageUrl} />
          })}
    </div>
  )
}

export default ShowImageCards
