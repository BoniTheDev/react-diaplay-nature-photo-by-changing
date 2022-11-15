// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImageDetails, getDisplayImage} = props

  const {id, thumbnailUrl, thumbnailAltText} = eachImageDetails

  const onSelectPhoto = () => {
    getDisplayImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button type="button" className="thumbnail-btn" onClick={onSelectPhoto}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
