

function PopupWithForm(props) { 
    return (
        //редактирование профиля
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`} onClick={() => props.onClose()}>
            <div className="popup__container">
                <form className="popup__input-form popup__form" name={`${props.name}-form`} novalidate>
                    {props.children}
                </form>
                {/* крестик закрытия формы редактирования профиля  */}
                <button type="button" className="popup__close-button" onClick={() => props.onClose()}></button>
            </div>
        </div>
    );
}

export default PopupWithForm;
