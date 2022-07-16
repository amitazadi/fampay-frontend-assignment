import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DynamicWidthCard from './DynamicWidthCard';
import './DynamicWidthCards.css';

const ShowDynamicWidthCards = ({ cardsData }) => {
  const [height, setHeight] = useState();
  const [cards, setCards] = useState();

  useEffect(() => {
    setCards(cardsData?.[0].cards);
    setHeight(cardsData?.[0].height);
  }, [cardsData]);

  return (
    <div className="dynamic-width-cards">
      {
        (cards === undefined) ? ''
          : cards.map((card) => {
            const { name, url, bg_image: { image_url: imageUrl } } = card;
            return (
              <DynamicWidthCard
                key={name}
                url={url}
                imageUrl={imageUrl}
                height={height}
              />
            );
          })
      }
    </div>
  );
};

ShowDynamicWidthCards.propTypes = {
  cardsData: PropTypes.array.isRequired,
};

export default ShowDynamicWidthCards;
