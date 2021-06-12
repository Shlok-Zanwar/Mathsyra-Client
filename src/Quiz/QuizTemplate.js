import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { useStopwatch } from 'react-timer-hook';
import useQuery from '../Hooks/useQuery';
import Loading from '../Loading';
import MCQ from './MCQ'

function QuizTemplate() {
    const [questions, setQuestions] = useState([]);
    const [quizDetials, setQuizDetails] = useState({});
    const query = useQuery();
    const contentName = query.get("content")
    // document.title = contentName;
    const history = useHistory();
    const {enqueueSnackbar} = useSnackbar();

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
      } = useStopwatch({ autoStart: false });
    
    useEffect(() => {
        axios.get("/questions", {
            params: {
                contentUrl: contentName
            }
        })
            .then(res => {
                console.log(res.data);
                setQuizDetails(res.data)
                setQuestions(JSON.parse(res.data.questions));
                start();
            })
            .catch(err => {
                console.log(err)
                if(!err.response){
                    // window.location.href = "/";
                }
                if(err.response.status === 401){
                    window.location.href = "/login";
                }
                else{
                    enqueueSnackbar("No Quiz Found", {
                        variant: 'error'
                    });
                    history.push("/");
                }
            })
    }, [])


    useEffect(() => {
        if(seconds === 10){
            pause();
            changeAnswer();
        }
    }, [seconds])

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
        
        <div className="quiz-div">
            <div style={{textAlign: 'center'}}>
                <h1>react-timer-hook</h1>
                <p>Stopwatch Demo</p>
                <div style={{fontSize: '100px'}}>
                    <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <p>{isRunning ? 'Running' : 'Not running'}</p>
                {/* <button onClick={start}>Start</button> */}
                {/* <button onClick={pause}>Pause</button> */}
                {/* <button onClick={reset}>Reset</button> */}
            </div>

            <h1>{quizDetials.name}</h1>
            {renderQuestions}
            {/* <MCQ question={question} /> */}
            <button onClick={() => {changeAnswer()}}> HIiii</button>
        </div>
    )
}

export default QuizTemplate
