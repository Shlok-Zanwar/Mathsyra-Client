import React from 'react'
import { useState, useEffect } from 'react';
import {GrLinkNext, GrLinkPrevious} from 'react-icons/gr'
// import Swipe from 'react-easy-swipe';
import MCQuestion from './MCQuestion';


function Something() {
    const [imgNumber, setImgNumber] = useState(0);
    
    const bgImageArray = [
        "https://images-ext-2.discordapp.net/external/V3hUZlvZxIRra9vR-zbZv2pVkIzUhF8nmPnZgGVK4-k/https/i.ibb.co/7tynPG9/Logo.jpg?width=669&height=669",
        "https://tympanus.net/Development/UnrollingImages/intro1.d1562ea2.jpg",
        "https://tympanus.net/Development/UnrollingImages/intro2.4aeb34de.jpg",
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX28495134.jpg",
        "https://buffer.com/library/content/images/library/wp-content/uploads/2016/06/giphy.gif"
    ] 

    // useEffect(() => {
    //     setTimeout(() => setImgNumber((imgNumber + 1)%bgImageArray.length), 5000);
    // });

    const handleGoPrev = () =>{
        setImgNumber(Math.max(0, imgNumber - 1));
    }

    const handleGoNext = () =>{
        setImgNumber(Math.min(bgImageArray.length - 1, imgNumber + 1));
    }

    const nextPrevButtons = () =>{
        if(imgNumber === 0){
            return(
                <div>
                    <img className="Image-collage" src={bgImageArray[imgNumber]} alt="Card cap" />
                    <GrLinkNext className="next-prev-icon" onClick={() => handleGoNext()} />
                </div>
            )
        }
        else if(imgNumber === bgImageArray.length - 1){
            return(
                <div>
                    <GrLinkPrevious className="next-prev-icon" onClick={() => handleGoPrev()} />
                    <img className="Image-collage" src={bgImageArray[imgNumber]} alt="Card cap" />
                </div>
            )
        }
        else{
            return(
                <div>
                    <GrLinkPrevious className="next-prev-icon" onClick={() => handleGoPrev()} />
                    <img className="Image-collage" src={bgImageArray[imgNumber]} alt="Card cap" />
                    <GrLinkNext className="next-prev-icon" onClick={() => handleGoNext()} />
                </div>
            )
        }
        
    }

    var question1 = {
        "question":"What is my fav color ?",
        "options":[
            "Black",
            "Blue",
            "Red",
            "Green"
        ],
        "correct":"Blue"
    }

    var question2 = {
        "question":"What is my fav color ?",
        "options":[
            "Blackk",
            "Bluke",
            "Rekd",
            "Grkeen"
        ],
        "correct":"Grkeen"
    }
    return (
        // <Swipe onSwipeRight={handleGoPrev} onSwipeLeft={handleGoNext}>
        // <div className="courses-container">
        //     {nextPrevButtons()}
        // </div>
        // </Swipe>
        <div className="div-abc">
        <MCQuestion question={question1} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />
        <MCQuestion question={question2} />

        </div>
    )
}

export default Something
