import { useEffect } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import Course from "./CourseComponents/Course";
import Home from "./HomeComponents/Home";
import MyNavbar from './MyNavbar';
import QuizTemplate from "./Quiz/QuizTemplate";

function RoutePaths({userDetails}) {
    useEffect(() => {
        console.log(userDetails.isLogged)
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
                        <Switch>
                        <Route path="/vedic-maths">
                            <MyNavbar />
                            <Course />
                        </Route>
                        <Route path="/testing">
                            <MyNavbar />
                            <QuizTemplate />
                        </Route>

                        <Route path="/">
                            <MyNavbar />
                            <Home />
                        </Route>
                        </Switch>
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            </Switch>

        </Router>
    )
}

export default RoutePaths