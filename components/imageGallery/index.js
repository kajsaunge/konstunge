import { useEffect, useState } from 'react';
import Image from 'next/image';

import Arrow from '@/icons/arrow';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, notAvailable, newArt }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageChange = (e) => {
    e.preventDefault();
    const arrayLength = images.length - 1;
    const currentIndex = images.findIndex((image) => image === selectedImage);
    const prev = currentIndex <= 0 ? arrayLength : currentIndex - 1;
    const next = currentIndex >= arrayLength ? 0 : currentIndex + 1;
    return setSelectedImage(
      e.target.id === 'prev' ? images[prev] : images[next]
    );
  };

  useEffect(() => {
    setSelectedImage(selectedImage);
  }, [selectedImage]);

  return (
    <div className={styles.gallery}>
      {notAvailable && (
        <div className={styles.itemSold}>
          <p>SÅLD</p>
        </div>
      )}
      {newArt && (
        <div className={styles.itemNew}>
          <p>NEW</p>
        </div>
      )}
      <div className={styles.galleryMainWrapper}>
        <nav
          className={styles.galleryNavList}
          aria-label='Bläddra bland bilderna'
          role='navigation'
        >
          <button
            id='prev'
            className={`${styles.galleryNavButton} ${styles.galleryNavPrev}`}
            onClick={(e) => handleImageChange(e)}
            aria-label='föregående bild'
          >
            <Arrow />
          </button>
          <button
            id='next'
            className={styles.galleryNavButton}
            onClick={(e) => handleImageChange(e)}
            aria-label='nästa bild'
          >
            <Arrow />
          </button>
        </nav>
        <div className={styles.galleryMainImageWrapper}>
          <Image
            loading='lazy'
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={660}
            height={800}
            className={styles.galleryMainItemSelected}
          />
        </div>
      </div>
      <ul className={styles.galleryList}>
        {images &&
          images.map((image, i) => (
            <li className={styles.galleryListItem} key={i}>
              <button
                className={styles.galleryListItemButton}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  loading='lazy'
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={80}
                  className={styles.galleryListItemImage}
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
