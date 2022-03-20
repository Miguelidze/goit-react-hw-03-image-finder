import React from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, handleTogleModal}) => {
    return (
        < ul className={s.ImageGallery}>
            {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
            handleTogleModal={handleTogleModal}
            modalImg={largeImageURL}
            key={id}
            img={webformatURL}/>
        ))}
    </ul >
    );
};

export default ImageGallery;
