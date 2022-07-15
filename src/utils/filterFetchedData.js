import fetchData from './fetchData'
import { CARDS_TYPES, SCROLLABLE } from '../constants'

const filterFetchedData = async () => {
  const { card_groups: cardGroups } = await fetchData()
  const { HC1, HC3, HC5, HC6, HC9 } = CARDS_TYPES

  const bigDisplayCards = cardGroups.filter((card) => card.design_type === HC3)
  const smallCardsArrow = cardGroups.filter((card) => card.design_type === HC6)
  const imgCards = cardGroups.filter((card) => card.design_type === HC5)

  const dynamicWidthCards = cardGroups.filter((card) => card.design_type === HC9)

  const scrollableNoArrowCards = cardGroups.filter(
    (card) => card.design_type === HC1 && card[`${SCROLLABLE}`] === true
  )

  const nonScrollableNoArrowCards = cardGroups.filter(
    (card) => card.design_type === HC1 && card[`${SCROLLABLE}`] === false
  )

  const smallCardsNoArrow = {
    scrollable: scrollableNoArrowCards[0].cards,
    nonScrollable: nonScrollableNoArrowCards[0].cards,
  }

  return {
    bigDisplayCards,
    smallCardsArrow,
    imgCards,
    dynamicWidthCards,
    smallCardsNoArrow,
  }
}

export default filterFetchedData
