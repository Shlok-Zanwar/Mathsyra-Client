import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import Course from "./CourseComponents/Course";
import Home from "./HomeComponents/Home";
import MyNavbar from './MyNavbar';

function RoutePaths() {
    return (
        <Router>
            <div className="homescreen-bg">
            </div>

            <MyNavbar />

            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/vedic-maths">
                    <Course />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>
    )
}

export default RoutePaths