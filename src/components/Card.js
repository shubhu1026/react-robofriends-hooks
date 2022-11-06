import React from 'react';
import './Card.css';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-custom dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='Robo Friend' />
            <div>
                <h2>{name}</h2>
                <p> {email}</p>
            </div>
        </div>
    );
}

export default Card;