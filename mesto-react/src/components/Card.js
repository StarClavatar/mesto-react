function Card(props) {
    return (
        <li key={props.card._id} className="element-grid__item">
            <img className="element-grid__image" src={props.card.link} alt={props.card.name} onClick={ ()=> {props.onCardClick(props.card.link)} }/>
            <div className="element-grid__info">
                <h2 className="element-grid__title">{props.card.name}</h2>
                <button className="element-grid__like-button" type="button"></button>
                <span className="element-grid__like-counter">{props.card.likes.length}</span>

            </div>
            <button className="element-grid__remove-button" type="button"></button>
        </li>
    );
}

export default Card;