import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import './BigDisplayCards.css'

const { PUBLIC_URL } = process.env

const BigDisplayCard = (props) => {
  const contentBox = useRef(null)
  const buttons = useRef(null)
  const [cardDetails, setCardDetails] = useState()

  useEffect(() => {
    setCardDetails(props)
  }, [props])

  const {
    title,
    formattedTitle: { text: formattedTitle },
    description,
    formattedDescription: { text: formattedDescription },
    cta,
    bgImage
  } = props

  const { text: btnText, text_color: btnTextColor, bg_color: bgColor, url: btnUrl } = cta[0]

  const handleClickOrKeyPress = () => {
    contentBox.current.classList.toggle('moveToRight')
    buttons.current.classList.toggle('showButtons')
  }

  const remindLater = () => {
    setCardDetails(null)
  }

  return (
    <>
      {!cardDetails ? (
        <div />
      ) : (
        <div className="big-display-card">
          <div className="big-display-card__buttons" ref={buttons}>
            <div
              className="big-display-card__buttons__remind"
              role="button"
              tabIndex="0"
              onKeyPress={remindLater}
              onClick={remindLater}
            >
              <img alt="remind later" src={`${PUBLIC_URL}/bell.svg`} style={{ height: '20px' }} />
              <p className="big-display-card__buttons__text">Remind</p>
              <p className="big-display-card__buttons__text">Later</p>
            </div>
          </div>

          <div
            className="big-display-card__content"
            tabIndex="0"
            onKeyPress={handleClickOrKeyPress}
            role="button"
            onClick={handleClickOrKeyPress}
            ref={contentBox}
          >
            <img className="bigcard-image" src={bgImage.image_url} alt="big-card" />
            <h2 className="big-display-card__title">{formattedTitle || title}</h2>
            <p className="big-display-card__description">{formattedDescription || description}</p>
            <a href={btnUrl}>
              <button
                style={{
                  backgroundColor: bgColor,
                  color: btnTextColor,
                }}
                className="big-display-card__btn"
                type="button"
              >
                {btnText}
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  )
}


export default BigDisplayCard
