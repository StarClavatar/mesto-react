
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState("");

    const handleEditProfileClick = () => { setIsEditProfilePopupOpen (true); } 
    const handleAddPlaceClick = () => { setIsAddPlacePopupOpen (true); } 
    const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true); } 
    const handleCardClick = (link) => { setSelectedCard(link); }

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard("");
    }

    return (
        <>
            <Header />

            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>

            <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                {/* <!-- заголовок формы  --> */}
                <h2 className="popup__title">Редактировать профиль</h2>
                {/* <!-- поле ввода с имененим профиля --> */}
                <input id="name-input" className="popup__input popup__input_edit_title popup__input_error" name="username"
                    type="text" placeholder="Имя" required minLength="2" maxLength="40"/>
                {/* <!-- подпись ошибки заполнения имени --> */}
                <span id="name-input-error" className="popup__input-error">ошибка заполнения</span>
                {/* <!-- поле ввода описания профиля  --> */}
                <input id="job-input" className="popup__input popup__input_edit_short-description popup__input_error"
                    name="about" type="text" placeholder="Описание" required minLength="2" maxLength="200"/>
                {/* <!-- подпись ошибки заполнения описания профиля --> */}
                <span id="job-input-error" className="popup__input-error">ошибка заполнения</span>
                {/* <!-- кнопка сохранить профиль --> */}
                <button className="popup__button popup__submit-button" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                {/* <!-- заголовок формы --> */}
                <h2 className="popup__title">Новое место</h2>
                {/* <!-- поле ввода названия --> */}
                <input id="place-name-input" className="popup__input popup__input_edit_title popup__input_error" name="name"
                    type="text" placeholder="Название места" required minLength="2" maxLength="30"/>
                {/* <!-- подпись с ошибкой заполнения названия фото --> */}
                <span id="place-name-input-error" className="popup__input-error">ошибка заполнения</span>
                {/* <!-- поле ввода url-адреса картинки --> */}
                <input id="place-img-input" className="popup__input popup__input_edit_short-description popup__input_error"
                    name="link" type="url" placeholder="Ссылка на картинку" required/>
                {/* <!-- подпись с ошибкой заполнения url-адреса  --> */}
                <span id="place-img-input-error" className="popup__input-error">ошибка заполнения</span>
                {/* <!-- кнопка сохранить --> */}
                <button className="popup__button popup__submit-button" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm title="Обновить аватар" name="new-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                {/* <!-- заголовок формы --> */}
                <h2 className="popup__title">Обновить аватар</h2>
                {/* <!-- поле ввода url-адреса картинки --> */}
                <input id="profile-img-input" className="popup__input popup__input_error"
                    name="link" type="url" placeholder="Ссылка на картинку" required/>
                {/* <!-- подпись с ошибкой заполнения url-адреса  --> */}
                <span id="profile-img-input-error" className="popup__input-error">ошибка заполнения</span>
                {/* <!-- кнопка сохранить --> */}
                <button className="popup__button popup__submit-button" type="submit">Сохранить</button>
            </PopupWithForm>

            <ImagePopup link={selectedCard} onClose={closeAllPopups}/>
            
            <Footer />      
            </>
    );
}

export default App;
