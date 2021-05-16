import React from 'react'

function MCQ({questions, setQuestions, index}) {

    const setAnswer = (ans) => {
        var updatedQuestions = [...questions];
        // console.log(updatedQuestions)
        updatedQuestions[index].answered = ans;
        // console.log("hi", updatedQuestions)
        setQuestions(updatedQuestions);
        // console.log(questions);
    }


    const renderOptions = questions[index].options.map(option => {
        if(option === questions[index].answered){
            return <h5 key={option}>{option}</h5>
        }
        else{
            return <div value={option} onClick={(e) => {setAnswer(option)}} key={option} >{option}</div>
        }
    })


    return (
        <div>
            <div>{questions[index].question}</div>
            <div>
                {renderOptions}
            </div>
        </div>
    )
}

export default MCQ
