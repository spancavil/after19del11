import React from 'react';
import './styles.scss';

const Item = ({character}) => {
    return (
        <div className = "itemContainer">
            <img src={character.image}/>
            <h2>{character.name}</h2>
        </div>
    )
}

export default Item
