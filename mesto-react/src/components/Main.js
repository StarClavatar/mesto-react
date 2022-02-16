import React from 'react';
import Api from '../utils/Api';
import Card from './Card.js';

function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    let userId

    React.useEffect(() => {
        //загружаем профиль пользователя и карточки 
        Promise.all([Api.getProfile(), Api.getInitialCards()])
            .then(([profile, cards]) => {
                //отображаем информацию профиля    
                userId = profile._id;
                setUserName(profile.name);
                setUserDescription(profile.about);
                setUserAvatar(profile.avatar);
                //рисуем все карточки
                setCards(cards);
            })
            .catch(err => { console.log(err) })
    });

    return (
        //основной контент
        <main className="content">
            {/* <!-- секция профиля пользователя --> */}
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <img src={userAvatar} alt="аватар" className="profile__avatar"/>
                    <button type="button" className="profile__avatar-edit-button" onClick={()=>props.onEditAvatar()}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__info-name">
                        <h1 className="profile__title">{userName}</h1>
                        <button type="button" className="profile__button profile__button_type_edit"
                            title="Редактировать профиль" aria-label="Редактировать профиль" onClick={()=>props.onEditProfile()}></button>
                    </div>
                    <p className="profile__short-description">{userDescription}</p>
                </div>
                <button type="button" className="profile__button profile__button_type_add" title="Добавить фото"
                    aria-label="Добавить фото" onClick={()=>props.onAddPlace()}></button>
            </section>
            {/* <!-- секция с гридом всех фото --> */}
            <section className="elements-grid">
                <ul className="element-grid">
                    {/* <!-- шаблон новой фото --> */}
                    {cards.map((card, i) => (
                        <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
                    ))}
                </ul>
            </section>
        </main>

    );
}

export default Main;