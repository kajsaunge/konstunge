import { useEffect, useState } from "react";
import Image from "next/image";

import Arrow from "@/icons/arrow";

import {
  gallery,
  galleryList,
  galleryMainWrapper,
  galleryListItemButton,
  galleryListItemImage,
  galleryListItem,
  itemSold,
  galleryNavList,
  galleryNavButton,
  galleryNavPrev,
  galleryNavNext,
  galleryMainImageWrapper,
  galleryMainItemSelected,
} from "./ImageGallery.module.css";

const ImageGallery = ({ images, notAvailable }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(selectedImage);
  }, [selectedImage]);

  const handleImageChange = (e) => {
    e.preventDefault();
    const arrayLength = images.length - 1;
    const currentIndex = images.findIndex((image) => image === selectedImage);
    const prev = currentIndex <= 0 ? arrayLength : currentIndex - 1;
    const next = currentIndex >= arrayLength ? 0 : currentIndex + 1;
    return setSelectedImage(e.target.id === "prev" ? images[prev] : images[next]);
  };

  return (
    <div className={gallery}>
      {notAvailable && (
        <div className={itemSold}>
          <p>SÅLD</p>
        </div>
      )}
      <div className={galleryMainWrapper}>
        <nav
          className={galleryNavList}
          aria-label="Bläddra bland bilderna"
          role="navigation"
        >
          <button
            id="prev"
            className={`${galleryNavButton} ${galleryNavPrev}`}
            onClick={(e) => handleImageChange(e)}
            aria-label="föregående bild"
          >
            <Arrow />
          </button>
          <button
            id="next"
            className={`${galleryNavButton} ${galleryNavNext}`}
            onClick={(e) => handleImageChange(e)}
            aria-label="nästa bild"
          >
            <Arrow />
          </button>
        </nav>
        <div className={galleryMainImageWrapper}>
          <Image
            loading="lazy"
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={660}
            height={800}
            className={galleryMainItemSelected}
          />
        </div>
      </div>
      <ul className={galleryList}>
        {images &&
          images.map((image, i) => (
            <li className={galleryListItem} key={i}>
              <button
                className={galleryListItemButton}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={80}
                  className={galleryListItemImage}
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
