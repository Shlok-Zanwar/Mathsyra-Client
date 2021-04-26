import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from '../Loading';
import { Link } from 'react-router-dom';

function HomeCards() {
    // var backend = "http://localhost:8000"
    // const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState([]);
    const [sendRequest, setSendRequest] = useState(1);


    // var abc = [
    //     {
    //         "id":1,
    //         "title": "Vedic Maths",
    //         "description": "Vedic Mathematics is a collection of Techniques/Sutras to solve mathematical arithmetics in easy and faster way.",
    //         "button_text": "Explore",
    //         "image": "https://i.ibb.co/kh08LcK/vedic-maths-card-image.jpg",
    //         "link": "/Vedic-Maths"
    //     },
    //     {
    //         "id":2,
    //         "title": "Trigonometry",
    //         "description": "In Indian astronomy, the study of trigonometric functions flourished in the Gupta period, especially due to Aryabhata (sixth century CE), who discovered the sine function.",
    //         "button_text": "Explore",
    //         "image": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX28495134.jpg",
    //         "link": "/Trigonometry"
    //     },
    //     {
    //         "id":3,
    //         "title": "Algebra",
    //         "description": "By the time of Aryabhata (499 AD) and Brahmagupta (628 AD), symbolic algebra had evolved in India into a distinct branch of mathematics and became one of its central pillars.",
    //     jwt    "button_text": "Explore",
    //         "image": "https://i.ibb.co/pyD6mmT/algebra-2.jpg",
    //         "link": "/Algebra"
    //     },
    //     {
    //         "id":4,
    //         "title": "Geometry",
    //         "description": "Vedic geometry involves a study of the Śulbasūtras, conservatively dated as recorded between 800 and 500 BCE, though they contain knowledge from earlier times.",
    //         "button_text": "Explore",
    //         "image": "https://i.ibb.co/nLQzZGb/geometry-card-image.jpg",
    //         "link": "/Geometry"
    //     }
    // ]

    useEffect(() => {
        axios.get("/")
            .then(response =>{
                setCards(response.data);
                // setLoading(false);
            })
            .catch(error => {
                console.log(error);
                // console.log(window.location.pathname);
                // setSendRequest(sendRequest+1);
                // if(sendRequest >= 5){
                //     alert("Couldnt get details\nRefresh page ?")
                //     window.location.reload();
                // }
          })
      }, [sendRequest])

    return cards.length === 0 ? <Loading /> : cards.map(card => (
        <Link to={card.link} key={card.id} >
            <div key={card.id} className="cards-box">
                <div >
                    <img className="card-image" src={card.image} />
                </div>
                <div className="cards-info">
                    <div className="cards-title">
                        {card.title}
                    </div>
                    <div className="cards-description">
                        {card.description}
                    </div>
                </div>
            </div>
        </Link>
    ))
}

export default HomeCards
