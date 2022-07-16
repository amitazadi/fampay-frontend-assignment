import PropTypes from 'prop-types';
import './DynamicWidthCards.css';

const DynamicWidthCard = (props) => {
  const { url, imageUrl, height } = props;
  return (
    <a href={url}>
      <img className="dynamic-width-cards" src={imageUrl} alt="card" style={{ height: `${height}px` }} />
    </a>
  );
};

DynamicWidthCard.propTypes = {
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default DynamicWidthCard;
