import styles from '../ImageGalleryItem/ImageGalleryItem.module.css'


const imageGalleryItem = ({picture,handleClick}) => {
  return (
    <li className={styles.galleryItem}  >
      <img src={picture.largeImageURL} alt={picture.tags} onClick={()=> handleClick(picture.largeImageURL)} className={styles.img} />
    </li>
  );
}

export default imageGalleryItem