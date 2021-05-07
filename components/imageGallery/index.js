import { useState } from "react";
import Image from "next/image";

import {
  gallery,
  galleryList,
  galleryMainItem,
  galleryListItemButton,
  galleryListItemImage,
  galleryListItem,
  itemSold,
} from "./ImageGallery.module.css";

const ImageGallery = ({ images, notAvailable }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className={gallery}>
      {notAvailable && (
        <div className={itemSold}>
          <p>SÅLD</p>
        </div>
      )}
      <Image
        loading="lazy"
        src={selectedImage.src}
        alt={selectedImage.alt}
        width={660}
        height={800}
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
