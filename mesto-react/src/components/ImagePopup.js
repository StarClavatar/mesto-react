
function ImagePopup(props) { 
    return (
        // формочка увеличения карточки
        <div className={`popup popup_zoom-image ${props.link && 'popup_opened'}`} onClick={() => props.onClose()}>
            <figure className="popup__image-container">
                <img className="popup__image" src={props.link} />
                <figcaption className="popup__image-caption"></figcaption>
                <button className="popup__close-button popup__close-button_place-image" type="button" onClick={() => props.onClose()}></button>
            </figure>
        </div>
    );
}

export default ImagePopup;