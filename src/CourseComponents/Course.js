import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from '../Loading';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Course() {
    const [courses, setCourses] = useState([]);
    const [quizes, setQuizes] = useState([]);
    const [loading, setLoading] = useState(true);

    const [sendRequest, setSendRequest] = useState(1);

    useEffect(() => {
        console.log(window.location.pathname);
        axios.get((window.location.pathname).toLowerCase())
            .then(response =>{
                console.log(response.data);
                setCourses(response.data.courses);
                setQuizes(response.data.quizes);
                setLoading(false);
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

    const makeCourseList = courses.map((course) => {
        return(
            <Link to={course.link}>
                <AccordionDetails >
                    <Typography>
                        {course.name}
                    </Typography>
                </AccordionDetails>
            </Link>
        )
    })
    

    const makeQuizList = quizes.map(quiz => {
        return(
            <Link to={quiz.link}>
                <AccordionDetails >
                    <Typography>
                        {quiz.name}
                    </Typography>
                </AccordionDetails>
            </Link>
        )
    })


    return loading ? <Loading /> : 
        <div className="course-content-div">
            <div className="course-content-inner-div">
                <Accordion defaultExpanded={true} style={{backgroundColor:"#2A265F", color:"white", borderTopLeftRadius:"20px", borderTopRightRadius:"20px"}}>
                    <AccordionSummary
                        expandIcon={<MdExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography >
                        Courses
                    </Typography>
                    </AccordionSummary>
                    {makeCourseList}
                </Accordion>

                <Accordion style={{backgroundColor:"#2A265F", color:"white", borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px"}}>
                    <AccordionSummary
                        expandIcon={<MdExpandMore />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                    <Typography >
                        Quizes
                    </Typography>
                    </AccordionSummary>
                    <>
                    {makeQuizList}
                    </>
                </Accordion>
                
            </div>
        </div>
}

export default Course


{/*         <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography >Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion style={{backgroundColor:"#2A265F"}} >
                <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                <Typography className="navbar-color" >Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails className="navbar-color">
                    <Typography className="navbar-color">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                <Link to="/abc">
                <AccordionDetails >
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
                </Link>
            </Accordion> */}