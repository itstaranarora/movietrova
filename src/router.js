import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/home/home";
import Error404 from './pages/Error404/Error404';
import About from './pages/About/About';
import Movie from './pages/Movie/Movie';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"  component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/movie/:id" component={Movie}/>
                <Route path="*" component={Error404}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;