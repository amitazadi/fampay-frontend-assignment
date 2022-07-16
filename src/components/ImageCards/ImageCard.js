import './ImageCards.css'

const ImageCard = (props) => {
  const { url, bgImageUrl } = props
  return (
    <a href={url}>
      <img className="image-card" src={bgImageUrl} alt="card" />
    </a>
  )
}

export default ImageCard
