import styles from '../ImageGalleryItem/ImageGalleryItem.module.css'
import PropTypes from 'prop-types';


const imageGalleryItem = ({picture,handleClick}) => {
  return (
    <li className={styles.galleryItem}  >
      <img src={picture.largeImageURL} alt={picture.tags} onClick={()=> handleClick(picture.largeImageURL)} className={styles.img} />
    </li>
  );
}

export default imageGalleryItem

imageGalleryItem.propTypes={
  picture:PropTypes.shape({
    largeImageURL:PropTypes.string.isRequired
  }).isRequired,
  handleClick:PropTypes.func.isRequired

}