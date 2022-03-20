import s from "./ImageGalleryItem.module.css"
const ImageGalleryItem = ({ img, modalImg, handleTogleModal }) => {
    return (
        <li className={s.ImageGalleryItem}
            onClick={() => handleTogleModal(modalImg)}>
            <img className={s.ImageGalleryItemImage} src={img} alt="" />
        </li >
    );
};
export default ImageGalleryItem;