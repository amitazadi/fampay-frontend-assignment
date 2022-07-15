import { useEffect, useState } from 'react'
import BigDisplayCard from './BigDisplayCard'

const ShowBigDisplayCards = ({ cardsData }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(cardsData?.[0].cards)
  }, [cardsData])

  console.log(cards)

  return (
    <div>
      {cards === undefined ? (
        <p>Loading...</p>
      ) : (
        cards.map((card) => {
          const {
            title,
            formatted_title: formattedTitle,
            description,
            formatted_description: formattedDescription,
            bg_image,
            cta,
            url,
          } = card

          return (
            <BigDisplayCard
              title={title}
              formattedTitle={formattedTitle}
              description={description}
              formattedDescription={formattedDescription}
              bgImage={bg_image}
              cta={cta}
              url={url}
            />
            // <h1>Hello world</h1>
          )
        })
      )}
    </div>
  )
}

export default ShowBigDisplayCards
