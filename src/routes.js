import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from  './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursesPage';

//Route: defines the component that will be always loaded
//and other components will be nested to it
//IndexRoute: says which component to load if access just "<address>/"
//Route: defines other sub pages that can ve accessed: "<address>/about"

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="course" component={CoursePage} />
    </Route>
);