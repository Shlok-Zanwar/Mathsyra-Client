import { useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import BlogTemplate from "./BlogTemplates/BlogTemplate";
import Course from "./CourseComponents/Course";
import Home from "./HomeComponents/Home";
import MyNavbar from './MyNavbar';
import QuizTemplate from "./Quiz/QuizTemplate";

function RoutePaths({userDetails}) {
    useEffect(() => {
        console.log(userDetails.isLogged)
        console.log(window.location.pathname);
    }, [])
    

    return (
        <Router>
            <div className="homescreen-bg">
            </div>

            <Switch>
                <Route path="/login">
                    <Login userDetails={userDetails} />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>

                { 
                    userDetails.isLogged ? (
                        <>
                            <Switch>
                                <Route path="/">
                                    <MyNavbar />
                                </Route>
                            </Switch>
                            <Switch>
                                <Route path="/vedic-maths">
                                    {/* <MyNavbar /> */}
                                    <Course />
                                </Route>
                                <Route path="/course">
                                    {/* <MyNavbar /> */}
                                    {/* <QuizTemplate /> */}
                                    <BlogTemplate />
                                </Route>
                                
                                <Route path="/quiz">
                                    {/* <MyNavbar /> */}
                                    <QuizTemplate />
                                    {/* <BlogTemplate /> */}
                                </Route>

                                <Route path="/">
                                    {/* <MyNavbar /> */}
                                    <Home />
                                </Route>
                            </Switch>
                        </>
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            </Switch>

        </Router>
    )
}

export default RoutePaths