import { useEffect, useState } from 'react'
import SmallCardsArrow from './SmallCardsArrow'

const ShowSmallCardsArrow = ({ cardsData }) => {
  const [cards, setCards] = useState()

  useEffect(() => {
    setCards(cardsData?.[0].cards)
  }, [cardsData])

  return (
    <div>
      {cards === undefined ? (
        <p>Loading...</p>
      ) : (
        cards.map((card) => {
          const { title, formatted_title: formattedTitle, name, icon, url } = card

          return (
            <SmallCardsArrow
              title={title}
              formattedTitle={formattedTitle}
              icon={icon}
              url={url}
              key={name}
            />
          )
        })
      )}
    </div>
  )
}

export default ShowSmallCardsArrow
