import React, { useState, useEffect } from 'react'
// import {CgRadioCheck} from 'react-icons/cg'
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import {GiPentarrowsTornado, GiDividedSpiral} from 'react-icons/gi'


function MCQuestion({question}) {
    const [isExploding, setIsExploding] = React.useState(false);

    const [className, setClassName] = useState("mcq-ques");

    useEffect(() => {
        var createClassState = [];
        for(var i = 0; i < question.options.length; i++){
            createClassState.push("mcq-ques");
        }
        setClassName(createClassState);
        
    }, [] )
    

    const handleClick = (e, index) =>{

        var createClassState = []
        if(className[index] !== "mcq-ques"){
            setIsExploding(false);
            createClassState = [...className];
            createClassState[index] = "mcq-ques";
            setClassName(createClassState);
            return;
        }

        
        for(var i = 0; i < question.options.length; i++){
            if(i == index){
                if(question.options[index] === question.correct){
                    createClassState.push("mcq-ques correct");
                    setIsExploding(true);
                    setTimeout(() => {
                        setIsExploding(false);
                    }, 2000);
                }
                else{
                    setIsExploding(false);
                    createClassState.push("mcq-ques wrong")
                }
            }
            else{
                createClassState.push("mcq-ques");
            }
        }
        setClassName(createClassState);
    }

     const createOptions = question.options.map((option, index) => {
        return(
            <div onClick={(e) => {handleClick(e, index)}} key={index} className={className[index]}>
                <GiPentarrowsTornado className="logout-icon" />
                {option}
            </div>
        )
    })
    

    return (
        <div className="question-div">
            <div className="mcq-question">
                Q) {question.question}
            </div>
            <div className="mcq-options-div">
                {createOptions}
            </div>
            {isExploding && <ConfettiExplosion />}
        </div>
    )
}

export default MCQuestion
