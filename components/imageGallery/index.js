import { useState } from "react";
import Image from "next/image";

import {
  gallery,
  galleryList,
  galleryMainItem,
  galleryListItemButton,
  galleryListItemImage,
  galleryListItem,
} from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className={gallery}>
      <Image
        loading="lazy"
        src={selectedImage.src}
        alt={selectedImage.alt}
        width={424}
        height={424}
        className={galleryMainItem}
      />
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
                  width={100}
                  height={100}
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
