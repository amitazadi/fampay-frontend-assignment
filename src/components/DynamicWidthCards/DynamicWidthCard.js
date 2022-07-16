import './DynamicWidthCards.css'

const DynamicWidthCard = (props) => {
  const { url, imageUrl, height } = props
  return (
    <a href={url}>
      <img
        className="dynamic-width-cards"
        src={imageUrl}
        alt="card"
        style={{ height: `${height}px` }}
      />
    </a>
  )
}

export default DynamicWidthCard
