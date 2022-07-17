import { useEffect, useState } from 'react'
import SmallCardNoArrow from './SmallCardNoArrow'
import './SmallCardsNoArrow.css'

const ShowSmallCardsNoArrow = ({ cardsData }) => {
  const [scrollableCards, setScrollableCards] = useState()
  const [nonScrollableCards, setNonScrollableCards] = useState()

  useEffect(() => {
    setScrollableCards(cardsData?.scrollable)
    setNonScrollableCards(cardsData?.nonScrollable)
  }, [cardsData])

  return (
    <div className="small-cards-no-arrow">
      <div className="small-cards-no-arrow__scrollable">
        {scrollableCards === undefined
          ? <h1 style={{}}>Loading...</h1>
          : scrollableCards.map((card) => {
              const {
                title,
                formatted_title: { text: formattedTitle },
                name,
                icon: { image_url: imageUrl },
              } = card
              return (
                <SmallCardNoArrow
                  key={name}
                  title={formattedTitle || title}
                  imageUrl={imageUrl}
                  isScrollable
                />
              )
            })}
      </div>

      <div className="small-cards-no-arrow__non-scrollable">
        {nonScrollableCards === undefined
          ? <h1 style={{}}>Loading...</h1>
          : nonScrollableCards.map((card) => {
              const {
                title,
                formatted_title: { text: formattedTitle },
                name,
                icon: { image_url: imageUrl },
              } = card
              return (
                <SmallCardNoArrow
                  key={name}
                  title={formattedTitle || title}
                  imageUrl={imageUrl}
                  isScrollable={false}
                />
              )
            })}
      </div>
    </div>
  )
}

export default ShowSmallCardsNoArrow
