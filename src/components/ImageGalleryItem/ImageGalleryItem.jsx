import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, takeLargeImage }) => {
  return (
    <>
      <li
        className={styles.ImageGalleryItem}
        onClick={() => takeLargeImage(largeImageURL)}
      >
        <img
          src={webformatURL}
          alt="galleryPhoto"
          className={styles.ImageGalleryItemImage}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  takeLargeImage: PropTypes.func.isRequired,
};
