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
            return (
                <div key={option} className="quiz-option selected">
                    {option}
                </div>
            )
        }
        else{
            return (
                <div value={option} onClick={(e) => {setAnswer(option)}} key={option} className="quiz-option" >
                    {option}
                </div>
            )
        }
    })


    return (
        <div className="quiz-question">
            <div className="quiz-mcq-question">
                {questions[index].question}
            </div>
            <div className="quiz-mcq-options">
                {renderOptions}
            </div>
        </div>
    )
}

export default MCQ
