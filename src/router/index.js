import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateArticle, Login, Main, Register } from '../pages';
// import Login from '../pages/Login'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/create-article" component={CreateArticle} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
