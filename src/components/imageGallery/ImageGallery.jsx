import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from '../imageGallery/ImageGallery.module.css'

const imageGallery = ({images,handleClick}) => {
  const element = images.map(picture => (
    <ImageGalleryItem picture={picture} key={picture.id} {...picture} handleClick={handleClick} />
  ));

  return <ul className={styles.list__photos}>{element}</ul>;
};

export default imageGallery;
