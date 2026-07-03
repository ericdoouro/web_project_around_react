import React, { useState, useEffect } from 'react';
import api from '../utils/api';

function Main() {
    
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api
            .getInitialCards()
            .then((Cards) => {
                setCards(Cards);
            })

            .catch((err) => {
                console.error(err);
            });
    }, []);
    
    return (
        <main>

        </main>
    )
}
export default Main;