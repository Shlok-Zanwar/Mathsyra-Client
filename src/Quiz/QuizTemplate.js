import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading';
import MCQ from './MCQ'

function QuizTemplate() {
    const [questions, setQuestions] = useState([]
    // [
    //     {
    //         "questionID": "Q1",
    //         "question": "What is my fav color ?",
    //         "options": ["Red", "Black", "Orange", "Blue"],
    //         "type": "mcq",
    //         difficulty: "easy",
    //         answered: ""
    //     },
    //     {
    //         "questionID": "Q1",
    //         "question": "What is my fav color ?",
    //         "options": ["Red", "Black", "PINK", "Blue"],
    //         "type": "mcq",
    //         difficulty: "easy",
    //         answered: ""
    //     }
    // ]
    );
    
    useEffect(() => {
        axios.get("/questions")
            .then(res => {
                console.log(res.data)
                setQuestions((res.data));
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const changeAnswer = () => {
        // let newQuestion = {...question}
        // newQuestion.answered = "Orange";
        // console.log(newQuestion)
        // setQuestion(newQuestion);
        console.log(questions)
    }

    const renderQuestions = questions.map((question, index) => {
        return <MCQ questions={questions} setQuestions={setQuestions} index={index} key={question.questionID} />
    })

    return questions.length === 0 ? <Loading /> : (
        <div>
        {renderQuestions}
            {/* <MCQ question={question} /> */}
            <button onClick={() => {changeAnswer()}}> HIiii</button>
        </div>
    )
}

export default QuizTemplate
